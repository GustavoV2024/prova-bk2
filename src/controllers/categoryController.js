const Category = require('../models/category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).send('Categoria não encontrada');
        res.json(category);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createCategory = async (req, res) => {
    const { name, description } = req.body;
    try {
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) return res.status(404).send('Categoria não encontrada');
        res.json(category);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).send('Categoria não encontrada');
        res.send('Categoria Deletada');
    } catch (error) {
        res.status(500).send(error.message);
    }
};
