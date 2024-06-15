const Author = require('../models/author');

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).send('Author not found');
        res.json(author);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createAuthor = async (req, res) => {
    const { name, bio, birthDate } = req.body;
    try {
        const author = new Author({ name, bio, birthDate });
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!author) return res.status(404).send('Autor não Encontrado');
        res.json(author);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id);
        if (!author) return res.status(404).send('Autor não Encontrado');
        res.send('Autor deletado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
