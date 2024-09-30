const stuModel=require("../model/studentModel")
const stuInformation=(req,res)=>{
   res.send("this is the student information page");
}
const studataSave=(req,res)=>{
   const{rollno,name,city}=req.body;
   const student=new  stuModel({
    rollno:rollno,
    name:name,
    city:city
   })
   student.save();
   res.send("data successfully save")
}
const stuDisplay=async (req,res)=>{
      const studata= await stuModel.find();
      res.send(studata);
}


module.exports={
    stuInformation,
    studataSave,stuDisplay
}