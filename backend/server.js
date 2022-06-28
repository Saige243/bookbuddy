const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.SERVER_PORT
const colors = require('colors')

connectDB()

app.get('/', (req, res) => {
  res.send('Hola, world!!')
})

app.listen(port, () => {
  console.log(colors.bold.underline(`Bookbuddy listening on port ${port}`))
})