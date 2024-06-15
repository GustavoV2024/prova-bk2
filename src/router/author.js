const express = require('express');
const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorController');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getAllAuthors);
router.get('/:id', auth, getAuthorById);
router.post('/', auth, createAuthor);
router.put('/:id', auth, updateAuthor);
router.delete('/:id', auth, deleteAuthor);

module.exports = router;