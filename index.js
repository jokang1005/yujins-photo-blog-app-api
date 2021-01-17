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