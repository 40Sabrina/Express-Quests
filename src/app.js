const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

const users = require("./controllers/users");

app.get("/api/users", users.getUsers);
app.get("/api/users/:id", users.getUsersById);

module.exports = app;
