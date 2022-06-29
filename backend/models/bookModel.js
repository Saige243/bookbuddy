import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  thumbnail: String
})

module.exports = mongoose.model('Book', bookSchema)