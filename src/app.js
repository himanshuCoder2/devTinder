const express = require('express');

const app =express();

//dynamic routing
app.use("/user",(req,res,next)=>{
    //route handler
    console.log("Route user ");
    // res.send("Response!!");
    next();
},
(req,res,next)=>{
    console.log("Route user 2");
    // res.send("2nd Response!!");
    next();
}
,
(req,res,next)=>{
    console.log("Route user 3");
    // res.send("3rd Response!!");
    next();
},
(req,res,next)=>{
    console.log("Route user 4");
    res.send("4th Response!!");
    // next();
}
);

app.listen(3000,()=>{
    console.log(
        "Server is successfully running on Port 3000.."
    );
});
