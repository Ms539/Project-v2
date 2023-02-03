const express = require('express')
const app = express()
const cors = require ('cors')
const cookieParser = require ('cookie-parser')
require('dotenv').config()
require('./helpers/dbConnect')


app.use(express.json({limit : '50 mb'}))
app.use(cookieParser())
app.use(cors())

//test app
 /* app.get('/',(req,res)=>{
    res.json({msg:`test to run app on ${PORT}` })
})  */

//routes
app.use ('/api/user' , require('./routes/userRoutes'))
app.use('/api/Post' , require('./routes/postRoutes'))







//CREATE SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT , (err) => { 
    err ? console.log(err) : console.log(`Application is running on http://localhost:${PORT}`)
})
