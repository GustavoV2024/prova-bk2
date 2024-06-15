const Book = require('../models/books');

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('Ator').populate('Categoria');
        res.json(books);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id).populate('Ator').populate('Categoria');
        if (!book) return res.status(404).send('Livro não Encontrado');
        res.json(book);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createBook = async (req, res) => {
    const { title, author, category, publishedDate, pages } = req.body;
    try {
        const book = new Book({ title, author, category, publishedDate, pages });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).send('Livro não Encontrado');
        res.json(book);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) return res.status(404).send('Livro não Encontrado');
        res.send('Livro Deletado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
