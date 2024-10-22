const express=require("express")
const router=express.Router()
const path=require("path")

filepath=path.join(__dirname,"../views/index.ejs")

router.get("/",(req,res)=>{

    let current=new Date().getHours()

    let greeting=current<12?"Hey Morning" : "Hey  Afternoon"

    let name="Tina"

    res.render(filepath,{name,greeting})

})

module.exports=router