const Loan = require('../models/loan');

exports.getAllLoans = async (req, res) => {
    try {
        const loans = await Loan.find().populate('usuario').populate('livro');
        res.json(loans);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id).populate('usuario').populate('livro');
        if (!loan) return res.status(404).send('Emprestimo Do Livro não Encontrado');
        res.json(loan);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createLoan = async (req, res) => {
    const { user, book, returnDate } = req.body;
    try {
        const loan = new Loan({ user, book, returnDate });
        await loan.save();
        res.status(201).json(loan);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!loan) return res.status(404).send('Emprestimo Do Livro não Encontrado');
        res.json(loan);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteLoan = async (req, res) => {
    try {
        const loan = await Loan.findByIdAndDelete(req.params.id);
        if (!loan) return res.status(404).send('Emprestimo Do Livro não Encontrado');
        res.send('Emprestimo Do Livro Deletado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
