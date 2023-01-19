const Mongoose=require("mongoose")
let pSchema=Mongoose.Schema(
    {
        Pcode:String,
        Pname:String,
        Pprice:String,
        MnfDate:String,
        WExpDate:String
    }
)
let Pmodel=Mongoose.model("product",pSchema)
module.exports=Pmodel