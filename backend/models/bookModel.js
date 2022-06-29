import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
  title: String,
  author: String,
  thumbnail: String
})

module.exports = mongoose.model('BookModel', bookSchema)