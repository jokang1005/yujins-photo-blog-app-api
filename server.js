///////////////////////
//IMPORT DEPENDENCIES//
///////////////////////


require("dotenv").config()
const {PORT, NODE_ENV} = process.env
const express = require('express')
const app = express()
const mongoose = require("./db/conn")
const morgan = require("morgan")
const cors = require("cors")
const corsOptions = require("./config/cors")
const AuthRouter = require('./controllers/user')
const auth = require("./auth")

///////////////////////
//Middleware//
///////////////////////
app.use(NODE_ENV === "production" ? cors(corsOptions) : cors())
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.static("public"))


///////////////////////
//Routes//
///////////////////////
app.get("/", auth, (req,res) => {
    res.json(req.payload)
})

app.use("/auth", AuthRouter)


//INDEX route //


//NEW route //


//DELETE route //


//UPDATE route //


//CREATE route //
app.get('/', (req,res) => {
    res.send('Hey there! Hello World!')
})


//EDIT route //



//SHOW route //




///////////////////////
//LISTENER//
///////////////////////

app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})