const mongoose = require('mongoose')

const User = new mongoose.Schema( {
    frist_name:{
        type:String,
    },
    last_name:{
        type:String,

    },
    email:{
        type:String,
        unique:false,
    },
    password:{
        type:String,

    },
    actor:{
        type:String,
        default:'พยาบาล'

    },
    location:{
        type:String,
        default:null
    },
    tokenVersion:{
        type:Number,
    }
} )
module.exports = mongoose.model('User', User)