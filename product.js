const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose") 
const pModel=require("./models/productModel")

var product=Express()
product.use(Bodyparser.json())
product.use(Bodyparser.urlencoded({extended:true}))
product.get("/",(req,res)=>{
    res.send("welcome to my product management application")
})
product.post("/add",(req,res)=>{
    let data=new pModel(req.body)
    console.log(data)
    res.send("add product")
})
product.post("/search",(req,res)=>{
    res.send("welcome to product search page")
})
product.post("/delete",(req,res)=>{
    res.send("welcome to delete product page")
})
product.post("/edit",(req,res)=>{
    res.send("welcome to view all edit product")
})
product.get("/viewall",(req,res)=>{
    res.send("welcome to view all product product")
})
product.listen(3004)