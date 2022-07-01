const asyncHandler = require('express-async-handler')
// NEW SYNTAX? V
// import asyncHandler from 'express/'

const Book = require('../models/bookModel')
// NOT SURE IF I'LL USE? V
// const User = require('../models/userModel')

// @desc Get Books
// @route GET /api/books
// @access Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user.id })

  res.status(200).json(books)
})

// @desc set Books
// @route POST /api/books/:id
// @access Private
const setBook = asyncHandler(async (req, res) => {
  if (!req.body.title || !req.body.author || !req.body.thumbnail) {
    res.status(400)
    throw new Error('Please add a text field.')
  }

  const book = await Book.create({
    title: req.body.title,
    // author: req.user.id,
    author: req.body.author,
    // thumbnail: 'Not sure what goes here?'
    thumbnail: req.body.thumbnail
  })

  res.status(200).json(book)
})

// NOT SURE IF I NEED A POST METHOD?
// @desc Update Book
// @route PUT /api/books/:id
// @access Private
// const updateBook = asyncHandler(async (req, res) => {
//   const book = await Book.findById(req.params.id)

// if (!book) {
//   res.status(400)
//   throw new Error('Book not found.')
// }

// check for user
// if (!req.user) {
//   res.status(401)
//   throw new Error('User not found')
// }

// make sure the logged in user matches the book user
// if (book.user.toString() !== req.user.id) {
//   res.status(401)
//   throw new Error('User not authorized')
// }

// const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
//   new: true
// })

//   res.status(200).json(updatedBook)
// })

// @desc Delete Book
// @route DELETE /api/books/:id
// @access Private
const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id)

  if (!book) {
    res.status(400)
    throw new Error('book not found.')
  }

  // check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // make sure the logged in user matches the book user
  if (book.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getBooks,
  setBook,
  // updateBook,
  deleteBook
}