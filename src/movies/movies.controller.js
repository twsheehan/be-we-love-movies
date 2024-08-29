const service = require("./movies.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function movieExists(request, response, next) {
  const movie = await service.read(request.params.movieId);
  if (movie) {
    response.locals.movie = movie;
    return next();
  }

  next({ status: 400, message: "Movie cannot be found." });
}

async function read(request, response) {
  const { movie: data } = res.locals;
  response.json({ data });
}

async function list(request, response) {
  const isShowing = request.query.is_showing;
  const data = await service.list(isShowing);
  response.json({ data });
}

module.exports = {
  movieExists,
  list: [asyncErrorBoundary(list)],
  read: [asyncErrorBoundary(movieExists), read],
};
