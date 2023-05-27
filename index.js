const express = require("express")
const app = express()

app.get("/home",(req,res)=>{
    res.send("welcome to home")
})

app.listen(3000,(req,res)=>{
    console.log("connected to server")
})