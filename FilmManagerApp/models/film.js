const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: String,
    year: Number,
    genre: String
});

module.exports = mongoose.model('Film', filmSchema);
