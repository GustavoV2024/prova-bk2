const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String },
    birthDate: { type: Date, required: true }
});

module.exports = mongoose.model('Autor', authorSchema);
