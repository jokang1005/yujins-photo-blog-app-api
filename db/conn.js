require("dotenv").config()
const {MONGODBURI} = process.env
const mongoose = require("mongoose")
const config = {useNewUrlParser: true, useUnifiedTopology: true}

/////////////////////////
//CONNECT TO MONGO//
/////////////////////////
mongoose.connect(MONGODBURI, config)


/////////////////////////
//EVENTS so we know we are connected//
/////////////////////////
mongoose.connection
.on("open", () => console.log("Connected to MONGO"))
.on("close", () => console.log("DISconnected to MONGO"))
.on("error", () => console.log(error))

module.exports = mongoose