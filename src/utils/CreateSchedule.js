const User = require('../model/User.js')
const Schedule = require('../model/Schedule.js')
const date = new Date()
const daysInSeptember = require('./CountDay.js')
const CreateSchedule = async(req, res) => {
    try{
    const user = await User.find()
    for(let i = 0; i< user.length; i++ ){
        const schedule = await Schedule.find({_user:user[i]._id})
        if(schedule.length === 0){
            await Schedule.create({
                _user:user[i]._id,
                year:date.getFullYear()
            })
            .then(async(data)=> {
                
                for(let j = 0; j<daysInSeptember; j++){
                await Schedule.findByIdAndUpdate({_id:data._id, _user:user[i]._id},{
                    $push:{
                        duty:{
                            month:date.getMonth(),
                            slots1:{
                                groud:NaN,
                                shift:"ว่าง",
                                count:0
                            },
                            slots2:
                            {
                                groud:NaN,
                                shift:"ว่าง",
                                count:0
                            },
                            slots3:{
                                groud:NaN,
                                shift:"ว่าง",
                                count:0
                            } 
                        }
                    }
                })

                }
            })
            
            
        }
      
    }

    }catch(error){
        res.send({
            message:error
        })
    }
}
const CreateMonth = async(req, res) => {
    

}



module.exports = CreateSchedule