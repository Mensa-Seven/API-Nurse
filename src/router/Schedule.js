const express = require('express')
const Schedule = require('../model/Schedule.js')
const User = require('../model/User.js')
const CreateSchedule = require("../utils/CreateSchedule.js")
const router = express.Router()



router.post('/create', async (req, res) => {
   try{
    await CreateSchedule(req, res)


    res.send({
        message:"Success",
    })

   }catch( error ){
    res.status(500)
    .json({
        message:error
    })
   }
})

module.exports = router