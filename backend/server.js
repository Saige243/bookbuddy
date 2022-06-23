const express = require('express')
const app = express()
const port = 8000
const colors = require('colors')

app.get('/', (req, res) => {
  res.send('Hola, world!!')
})

app.listen(port, () => {
  console.log(colors.bold.underline(`Bookbuddy listening on port ${port}`))
})