const { Router } = require("express");
const {
  addMovie,
  listMovies,
  movieUpdate,
  deleteMovie,
} = require("./movieControllers");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies); // a get request does not have body
movieRouter.put("/movie", movieUpdate);
movieRouter.delete("/movie/:filterKey/:filterVal", deleteMovie);

module.exports = movieRouter;
