const express= require('express')

const mdb=require('mongoose')
const dotenv=require('dotenv')
const bcrypt = require('bcrypt');
const cors=require('cors')
dotenv.config()
const Signup=require('./models/signupSchema')
const Login=require('./models/loginSchema')
const app =express()
app.use(express.json())
app.use(cors())
const PORT = 5555

mdb.connect(process.env.MONGODB_URL).then(()=>{
    console.log("MDB Connection Successful")
}).catch((err)=>{
    console.log("MDB Connection Failed", err)
})
app.get("/",(req,res)=>(
    res.send("<h1>Welcome to Backend Server<h1/>")
))

app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName,userName, email, password } = req.body;
        const hashedPassword= await bcrypt.hash(password,10);
        const newSignup = new Signup({
            firstName,
            lastName,
            userName,
            email,
            password:hashedPassword
        });

        await newSignup.save();

        console.log("Signup Successful");
        res.status(201).json({ message: "Signup Successful", isSignup: true });
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Signup Unsuccessful", isSignup: false });
    }
});

app.post("/login",async (req,res)=>{
    try{
        const{userName,password}=req.body
        const user=await Signup.findOne({userName});
        if(!user){
            return res.status(404).json({ message: "User Not Found", isLogin: false })
        }
        const validpassword=await bcrypt.compare(password,user.password)
        if(!validpassword){
            return res.status(401).json({ message: "Invalid Password", isLogin: false })
        }
        console.log("login successfull")
        res.status(200).json({ message: "Login Successful", isLogin: true });
    }catch(error){
        console.error("Login Error:", error);
        res.status(500).json({ message: "Error", isLogin: false });
    }
})

app.get("/static",(req,res)=>(
    res.sendFile("C:/Users/ASUS/Documents/COLLEGE/MERN_LEARNING/BASIC HTML/index.html")
))



app.listen(PORT,()=>console.log("Server Started Successfully..."))
