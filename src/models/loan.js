const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: 'Livro', required: true },
    loanDate: { type: Date, default: Date.now },
    returnDate: { type: Date, required: true }
});

module.exports = mongoose.model('Emprestimo', loanSchema);