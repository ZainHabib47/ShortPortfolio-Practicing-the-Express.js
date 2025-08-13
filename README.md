# BecomingBackendDeveloper
This is the repository where i practice the Node and express Code

topic : ejs
first step install npm i ejs 2)Second step is Set view engine to ejs e.g(app.set("view engine","ejs")) 3) Third step to make the folder name "views" exact spelling and then during rednering timme the syntax will not be like res.send but res.render("index") just file name with extension and only that file name which are include in the views folder otherwise it will not work

topics : parameters
Here the Req is used because the user Want to reacht the page which is /profile/ it means that the user send the request and the request contain the params and that params contain the variable name is username (: it means that this is variable with colon with that like :username)

topics : Static
now we will create the Static files after the template engine which is Ejs
first step is to create a folder name public
then in that folder make 3 folder which are images, stylesheets and javascripts
then configurwe the static e.g ( app.use(express.static("./public)))
then run this 





const express= require("express")
const app=express()

app.set("view engine","ejs")

app.use(function(req,res,next){
    console.log("Helllo i am from middle ware")
    next();
})

app.use(function(req,res,next){
    console.log("Helllo i am from middle ware 2 ")
    next();
})

app.get('/',function(req,res){
    res.render("index",{age:22})  // 1)first step install npm i ejs 2)Second step is Set view engine to ejs e.g(app.set("view engine","ejs")) 3) Third step to make the folder name "views" exact spelling and then during rednering timme the syntax will not be like res.send but res.render("index") just file name with extension and only that file name which are include in the views folder otherwise it will not work
})

app.get('/profile/:username',function(req,res){
    res.send(`Hello this is ${req.params.username} Profile......`)  //Here the Req is used because the user Want to reacht the page which is /profile/ it means that the user send the request and the request contain the params and that params contain the variable name is username (: it means that this is variable with colon with that like :username)
})

app.listen(3000);