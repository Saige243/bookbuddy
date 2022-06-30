const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  title: String,
  author: String,
  thumbnail: String
})

module.exports = mongoose.model('Book', bookSchema)