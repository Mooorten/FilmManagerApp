const Film = require("../models/film");

// Create film
exports.createFilm = async (req, res) => {
    try {
        const newFilm = new Film({
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        await newFilm.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error while creating film");
    }
};

// Get all films
exports.getAllFilms = async (req, res) => {
    try {
        const films = await Film.find();
        res.render('index', { films });
    } catch (err) {
        console.error("Error fetching films:", err);
        res.status(500).send("Error fetching films.");
    }
};

// Update film
exports.updateFilm = async (req, res) => {
    try {
        await Film.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            director: req.body.director,
            year: req.body.year,
            genre: req.body.genre
        });
        res.redirect('/');
    } catch (err) {
        console.error("Error while updating film:", err);
        res.status(500).send("Error while updating film");
    }
};

// Delete film
exports.deleteFilm = async (req, res) => {
    try {
        await Film.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Error while deleting film:", err);
        res.status(500).send("Error while deleting film");
    }
};