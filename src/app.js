const express = require('express');

const app =express();

//Post API
app.post("/user",(req,res)=>{
    res.send({firstname:"Himu",lastname:"B"})
})


//GET API
app.get("/user",(req,res)=>{
    res.send("Data retrieved succesfully")
})

//Update
app.put("/user",(req,res)=>{
    res.send({message:"User update successfully",firstname:"H",lastname:"B"})
})

app.patch("/user",(req,res)=>{
    res.send({message:"User update successfully",status:{active:true}})
})

app.delete("/user",(req,res)=>{
    res.send("User Deleted Successfully")
})

app.use("/hello",(req,res)=>{
res.send("hello from the server!");
});

app.use("/test",(req,res)=>{
res.send("Server is start!");
});

app.listen(3000,()=>{
    console.log(
        "Server is successfully running on Port 3000.."
    );
});
