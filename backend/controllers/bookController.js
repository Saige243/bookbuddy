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

// @desc set Goals
// @route POST /api/books/:id
// @access Private
const setBook = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field.')
  }

  const goal = await Goal.create({
    title: req.body.text,
    author: req.user.id,
    thumbnail: 'Not sure what goes here?'
  })

  res.status(200).json(goal)
})

// NOT SURE IF I NEED A POST METHOD?
// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
// const updateBook = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

// if (!goal) {
//   res.status(400)
//   throw new Error('Goal not found.')
// }

// check for user
// if (!req.user) {
//   res.status(401)
//   throw new Error('User not found')
// }

// make sure the logged in user matches the goal user
// if (goal.user.toString() !== req.user.id) {
//   res.status(401)
//   throw new Error('User not authorized')
// }

// const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//   new: true
// })

//   res.status(200).json(updatedGoal)
// })

// @desc Delete Goal
// @route DELETE /api/goals/:id
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

  // make sure the logged in user matches the goal user
  if (book.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await book.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}