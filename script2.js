const express=require("express")
const app=express()

app.use(express.static("./public"))

app.set("view engine","ejs")

app.use(function(req,res,next){
    console.log("This is middleware response")
    next();
})

app.get("/profile/:username",function(req,res){
    res.render("index")
})

app.listen(3000)