require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const { errorHandler } = require('./ErrorHandler')

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected')
    } catch (error) {
        console.log(error)
    }
}

const PORT = process.env.PORT
const app = express()


app.use(cors());
app.use(express.json());

app.use('/api', require('./Routes'))

app.use(errorHandler)

const start = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port', PORT)
    }) 
}

start()