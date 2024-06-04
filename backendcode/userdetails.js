const mongoose=require('mongoose');


const userdetailsschema=new mongoose.Schema(
    {
        username:String,
        email:String,
        phoneno:String,
    },
);
const User = mongoose.model("userinfo",userdetailsschema);

module.exports =  User;

