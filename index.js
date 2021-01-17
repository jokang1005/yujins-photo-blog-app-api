const express = require('express')
const app = express()
const PORT = 3000


//Middleware//
app.use(express.json())



//Routers//

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



app.use('/auth', AuthRouter)

app.listen(PORT, () => {
    console.log(`You are listening on PORT ${PORT}`)
})