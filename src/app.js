const express = require('express');

const app =express();


app.use("/",(req,res)=>{
res.send("Hello from the page!");
});

app.use("/hello",(req,res)=>{
res.send("hello from the server!");
});

app.use("/test",(req,res)=>{
res.send("Server is start!");
});

app.listen(7777,()=>{
    console.log(
        "Server is successfully running on Port 7777.."
    );
});
