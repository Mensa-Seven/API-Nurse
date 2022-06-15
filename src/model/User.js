const mongoose = require('mongoose')

const User = new mongoose.Schema( {
    frist_name:{
        type:String,
        unique:true,
    },
    last_name:{
        type:String,
        unique:true,       

    },
    email:{
        type:String,
        unique:false,
    },
    password:{
        type:String,
        unique:true,

    },
    actor:{
        type:String,
        default:'พยาบาล'

    },
    location:{
        type:String,
        default:"ตำเเหน่งโรงพยาบาล"
    },
    tokenVersion:{
        type:Number,

    }
} )
module.exports = mongoose.model('User', User)