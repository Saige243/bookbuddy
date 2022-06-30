const express = require('express')
const router = express.Router()
import { getBooks, setBook, deleteBook } from '../controllers/bookController'

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getBooks).post(protect, setBook)
router.route('/:id').delete(protect, deleteBook)

module.exports = router