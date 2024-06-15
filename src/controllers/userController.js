const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send('Usuario Não Encontrado');
        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) return res.status(404).send('Usuario Não Encontrado');
        res.json(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).send('Usuario Não Encontrado');
        res.send('Usuario Deletado');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
