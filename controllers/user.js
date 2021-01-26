require("dotenv").config()
const User = require('../models/user')
const {Router} = require("express")
const router = Router()
const jwt = require("jsonwebtoken")
const {SECRET} = process.env
const bcrypt = require('bcryptjs')

router.post("/signup", async (req,res) => {
    try {
    req.body.password = await bcrypt.hash(req.body.password, 10)
    const newUser = await User.create(req.body)
    res.status(200).json(newUser)}
    catch(error) {
        res.status(400).json({error: "signup unavailable"})
    }
})

router.post("/login", async (req, res) => {
    try{
        const {username, password} = req.body
        const user = await User.findOne({username})
        //destructuring helps in this case in multiple ways because not only do I not have to do req.body.username, but because "username" property is the same, I don't have to do username: username
        if (user) {
            const match = bcrypt.compare(password, user.password)
            if(match) {
                const token = await jwt.sign({username}, SECRET)
                //sign creates token, verify checks token
                //payload: data we want to store in the token
                res.status(200).json({token})

            } else {
                res.status(400).json({error: "PASSWORD DOES NOT MATCH"})
            }

        } else {
            res.status(400).json({error: "USER DOES NOT EXIST"})
        }
    }
    catch(error) {
        res.status(400).json({error: "LOGIN NOT WORKING"})
    }
})
module.exports = router