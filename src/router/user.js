const User = require('../model/User.js')
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.js')


router.get('/profile', authMiddleware, async(req, res) => {
    try{
        const user = await User.findById(req.user.id)
        console.log(user);

    }catch( error) {
        

    }
})
