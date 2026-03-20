const mongoose = require('mongoose');


const apischema=new mongoose.Schema({

    id:{
        type:Number,
        unique:true
    },
    titre:String,
    auteur:String,
    date:Date,
    categorie:String


});



module.exports=mongoose.model("api",apischema);