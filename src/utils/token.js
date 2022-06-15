const jwt = require("jsonwebtoken")
const dotenv = require('dotenv')
dotenv.config()


const createToken = (sub) => {
	const token = jwt.sign({user_id:sub }, process.env.JWT_SECRET, {expiresIn: "7d"})

    return token
}
const verifyToken = (token) => {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    return decoded
}
module.exports = {
    createToken,
    verifyToken
} 
  