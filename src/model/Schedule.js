const mongoose = require('mongoose')
const User = require('./User.js')
const Schedule = new mongoose.Schema({
   _user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User
   },
   year:{
    type:String
   },
   duty:[
   
   ],

   createAt:{
    type:Date
   }
})

module.exports = mongoose.model('Schedule', Schedule)