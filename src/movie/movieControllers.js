const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({movie: newMovie});  // This is akin to return statement
    } catch (error) {
        console.log(error);
    }
};


exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({movie: Movie});
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message});
    }
};