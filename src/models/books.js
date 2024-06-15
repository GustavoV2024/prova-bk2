const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Autor', required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
    publishedDate: { type: Date, required: true },
    pages: { type: Number, required: true }
});

module.exports = mongoose.model('Livro', bookSchema);
