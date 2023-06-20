const express = module.require('express')
const mongoose = module.require('mongoose')
const cors = module.require('cors')
const dotenv = module.require('dotenv')
const messageRoute = module.require('./routes/messageRoute')



dotenv.config()
const app = express()
const PORT =    process.env.PORT || 8000
app.listen(PORT, ()=>{
      console.log("app is listening for request on http://localhost:" + PORT)
})

// middle wares
app.use(express.json())

// initialize cors
app.use(cors())

app.use('/messages', messageRoute)


// connect to db
mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("connection to DB successful!")
}).catch((err)=>{
    console.log("connection to database failed! due to " + err.message)
})

