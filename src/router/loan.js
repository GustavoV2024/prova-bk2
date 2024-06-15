const express = require('express');
const { getAllLoans, getLoanById, createLoan, updateLoan, deleteLoan } = require('../controllers/loan');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getAllLoans);
router.get('/:id', auth, getLoanById);
router.post('/', auth, createLoan);
router.put('/:id', auth, updateLoan);
router.delete('/:id', auth, deleteLoan);

module.exports = router;
