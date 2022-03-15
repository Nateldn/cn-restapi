require("./db/connection");
const express = require("express");
const cors = require("cors");
const movieRouter = require("./movie/movieRoutes");
const userRouter = require("./user/userRoutes");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors()); // must be above the routers so that the router has access to the method
app.use(movieRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
