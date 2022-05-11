const jwt = require('jsonwebtoken');
const { split } = require('lodash');
const UserModel = require('../models/User');

var checkUserAuth = async(req, res, next) => {
    let token
    const { authorization } = req.headers
    if(authorization && authorization.startswith('Bearer')){
        try {
            // Get token from Header
            token = authorization=split(' ')[1]

            // verify Token
            const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // Get User from token
            req.user = await UserModel.findById(userID).select(-password)
            next()
        } catch (error) {
            console.log(error)
            res.status(401).send({"status":"failed", "message":"Unauthorized user"})
            
        }

    }
    if(!token){
        res.status(401).send({"status":"failed", "message":"Unauthorized user, No token"})

    }


}

module.exports = checkUserAuth;