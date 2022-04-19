const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB succesfully connected on ${connection.connection.host}`.cyan.underline)
    } catch (err) {
        console.log(err);
    }
   
}
module.exports = connectDB