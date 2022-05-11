const express = require("express")
const cors = require("cors")
const connectDB = require('./config/connectdb')
const dotenv = require('dotenv');

dotenv.config({ path: "./config/.env" });


const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDB(DATABASE_URL)

// JSON
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
  })