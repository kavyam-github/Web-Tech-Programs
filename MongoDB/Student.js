const mongoose=require('mongoose');
const schema=mongoose.Schema({
    Name:String,
    id:Number,
    Sem:Number,
    Course:String,
    Email:String
});
module.exports=mongoose.model("Student",schema);