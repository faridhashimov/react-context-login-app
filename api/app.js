const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const connectDB = require('./config/db')
const authRoute = require('./routes/authRoutes')
const userRoute = require('./routes/userRoutes')

const PORT = process.env.PORT || 8800

connectDB()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(PORT, () => {
    console.log(`app listen on port ${PORT}`)
})
