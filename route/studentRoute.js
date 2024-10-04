const express=require("express");
const route=express.Router();
const stuController=require("../controllers/studentController")
route.get("/stuinfo",stuController.stuInformation)
route.post("/datasave",stuController.studataSave)
route.get("/display",stuController.stuDisplay)
route.post("/search",stuController.stuSearch)
route.post("/searchboth",stuController.stusearchBoth)
route.post("/datasavebycreate",stuController.studatasavebyCreate)
route.get("/querysearch",stuController.searchbyQuery)

module.exports=route;