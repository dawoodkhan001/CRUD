require('dotenv').config();
const express = require('express');
const cors = require('cors')

const connectToDb = require('./config/db.js')

const app = express();

// Express middleWare
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

// init Connection to db
connectToDb()

const userRoutes = require("./routes/userRoutes.js")
app.get('/', userRoutes);


module.exports = app;