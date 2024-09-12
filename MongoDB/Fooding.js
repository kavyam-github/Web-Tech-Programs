const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    id:String,
    name:String,
    category:String,
    price:String,
    description:String
});
module.exports=mongoose.model("Fooding",Schema);