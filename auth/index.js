require("dotenv").config()
const jwt = require("jsonwebtoken")

const auth = async (req, res, next) => {
    //Authorization: "bearer token"
    try{
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1]
        const payload = jwt.verity(token, SECRET);
        if(payload) {
            req.body.payload = payload
            next();
        }else {
            res.status(400).json({error: "VERIFICATION FAILED OR NO PAYLOAD"})
        }
    }else {
        res.status(400).json({error: "NO AUTHORIZATION HEADER"})
    }}
    catch(error) {
        res.status(400).json({ error })
    }
}

