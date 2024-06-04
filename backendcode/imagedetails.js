const mongoose=require('mongoose');


const imagedetailsschema=new mongoose.Schema(
    {
        image:String,
        brand:String
    },
);
const Image = mongoose.model("carsimg",imagedetailsschema);

module.exports =  Image;

