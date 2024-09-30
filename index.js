const express=require("express");
const app=express();
const stuRoute=require("./route/studentRoute");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/jayshreeram");

const bodyParser=require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/students",stuRoute);
app.listen(9000,()=>{
    console.log("server running on 9000!!");

})