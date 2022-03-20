const Movie = require("./movieModel");

// Create function
exports.addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(200).send({ movie: newMovie }); // This is akin to return statement
  } catch (error) {
    console.log(error);
  }
};

// Retrieve/Read function
exports.listMovies = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.status(200).send({ movie: Movie });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

// Update function
exports.movieUpdate = async (req, res) => {
  try {
    const movieUpdate = await Movie.updateOne(
      { [req.body.filterKey]: req.body.filterVal },
      { [req.body.updateKey]: req.body.updateVal }
    );
    if (movieUpdate.modifiedCount > 0) {
      res.status(200).send({ msg: "... movie successfully updated." });
    } else {
      throw new Error("Unable to update movie!");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

// Delete function
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.deleteOne({
      [req.params.filterKey]: req.params.filterVal,
    });
    if (deletedMovie.deletedCount > 0) {
      res.status(200).send({ msg: "Movie successfully deleted" });
    } else {
      throw new Error("Unable to delete movie");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};
