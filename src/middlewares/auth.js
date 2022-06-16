const User = require('../model/User.js')
const {createToken, verifyToken} = require('../utils/token.js')

const authMiddleware = async (req, res, next) => {
	const token = req.body.token || req.query.token || req.headers['x-access-token']
	if(!token) return res.send("Invalid Toekn")
	try {
		const decoded = verifyToken(token)
		result = decoded.user_id
		const user = await User.findById(result.sub)
	

		if (result.v !== user.tokenVersion) {
			return res.sendStatus(401)
		}
		req.user = user
		next()
		
	} catch (error) {
		res.status(500).send({ error })
	}
}


module.exports = authMiddleware