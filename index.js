const express = require('express')
const app = express()
const PORT = 3000


//Middleware//
app.use(express.json())



//Routers//
app.get('/', (req,res) => {
    res.send('Hey there! Hello World!')
})

app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})