const express= require('express')

const app =express()

app.get("/",(req,res)=>(
    res.send("<h1>Welcome to Backend Server<h1/>")
))

app.get("/static",(req,res)=>(
    res.sendFile("C:/Users/ASUS/Documents/COLLEGE/MERN_LEARNING/BASIC HTML/index.html")
))

const PORT = 5555

app.listen(PORT,()=>console.log("Server Started Successfully..."))
