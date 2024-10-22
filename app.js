const express=require("express")
const app=express()
const path=require("path")
const PORT=8000

app.set('view engine','ejs');

app.use(express.json())

filepath=path.join(__dirname,"/views/index.ejs")

const Welcome=require("./routes/welcome.js")
app.use("/welcome",Welcome)

app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`Listening on PORT ${PORT}`)
    }
})