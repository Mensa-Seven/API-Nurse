const mongoose = require('mongoose')
const User = require('./User.js')
const Schedule = new mongoose.Schema({
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    group:{
        type:String
    },
    date:{
        type:Date
    },
    duty:{
        date:{
            type:Date
        },
        shift1:{
            type:String
        },
        shift2:{
            type:String
        },
        shift3:{
            type:String
        }
    }
})

module.exports = mongoose.model('Schedule', Schedule)