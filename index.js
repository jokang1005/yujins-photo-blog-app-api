const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res) => {
    res.send('Hey there! Hello World!')
})

app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})