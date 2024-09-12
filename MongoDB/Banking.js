const mongoose=require('mongoose');
const Schema=mongoose.Schema({
    id:String,
    account_number:String,
    account_type:String,
    balance:String,
    currency:String
});
module.exports=mongoose.model("Banking",Schema);