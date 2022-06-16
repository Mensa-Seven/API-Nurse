const User = require('../model/User.js')
const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.js')


router.get('/profile/:id',authMiddleware , async(req, res) => {

    try{
        const pk = req.params.id
        const user = await User.findById(pk)
        res.send({
            data:{
                frist_name:user.frist_name,
                last_name:user.last_name,
                email:user.email,
                actor:user.actor
            }
        })

    }catch( error) {
        res.status(404)
        .json({
            Error:error
        })
        
    }
})
router.patch('/profile/:id', authMiddleware ,async(req, res) => {
    try{
      const user =  await User.findByIdAndUpdate({_id:req.params.id}, 
        {
            $set:req.body
        },
        {
            $new:true
        }
        )

        res.send({
            user
        })
    }catch( error ){
        res.statusCode(500)
        .json({error})
    }
})

router.get('/test', (req, res) => {
    res.send('PASS')
})
module.exports = router