const stuModel=require("../model/studentModel")
const stuInformation=(req,res)=>{
res.send("this is the information page");
}
const studataSave=(req,res)=>{
   const {rollno,name,city,fees}=req.body;
   const student=new stuModel({
      rollno:rollno,
      name:name,
      city:city,
      fees:fees
   })
   student.save();
   res.send("data successfully save");
}
const stuDisplay=async(req,res)=>{
   console.log(req.body);
    const data= await stuModel.find();
    res.send(data)
}
const stuSearch= async(req,res)=>{
const {rollno}=req.body;
const data=await stuModel.find({"rollno":rollno})
res.send(data)
}
const stusearchBoth=async(req,res)=>{
   const {rollno,name}=req.body;
   console.log(rollno,name)
   const data=await stuModel.find({$and:[{"rollno":rollno},{"name":name}]})
   res.send(data)

}
const studatasavebyCreate= async(req,res)=>{
     const {rollno,name,city,fees}=req.body;
     const mydata=stuModel.create({
      rollno:rollno,
      name:name,
      city:city,
      fees:fees
     })
     res.send("data save by create");
}
const searchbyQuery= async(req,res)=>{
         const {rollno,name}=req.query
         const data= await stuModel.find({$and:[{"rollno":rollno},{"name":name}]})
         res.send(data)
}

module.exports={stuInformation,studataSave,stuDisplay,stuSearch,stusearchBoth,studatasavebyCreate,searchbyQuery}