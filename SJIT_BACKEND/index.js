const express= require('express')

const mdb=require('mongoose')
const dotenv=require('dotenv')
const bcrypt = require('bcrypt');

dotenv.config()
const Signup=require('./models/signupSchema')
const app =express()
app.use(express.json())
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
        const { firstName, lastName, email, password } = req.body;
        const hashedPassword= await bcrypt.hash(password,10);
        const newSignup = new Signup({
            firstName,
            lastName,
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

app.get("/static",(req,res)=>(
    res.sendFile("C:/Users/ASUS/Documents/COLLEGE/MERN_LEARNING/BASIC HTML/index.html")
))



app.listen(PORT,()=>console.log("Server Started Successfully..."))
