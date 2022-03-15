const { Router } = require("express");
const { addMovie, listMovies} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies); // a get request does not have body

module.exports = movieRouter; 