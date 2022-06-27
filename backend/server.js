const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const colors = require('colors')

app.get('/', (req, res) => {
  res.send('Hola, world!!')
})

app.listen(port, () => {
  console.log(colors.bold.underline(`Bookbuddy listening on port ${port}`))
})