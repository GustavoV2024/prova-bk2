const express = require('express');
const router = express.Router();
const bookController = require('../controllers/booksController');
const auth = require('../middlewares/auth');

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', auth, bookController.createBook);
router.put('/:id', auth, bookController.updateBook);
router.delete('/:id', auth, bookController.deleteBook);

module.exports = router;
