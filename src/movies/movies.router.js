const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

const reviewsRouter = require("../reviews/reviews.router");
const theatersRouter = require("../theaters/theaters.router");

// Router use middleware
router.use(cors());
router.use("/:movieId([0-9]+)/reviews", controller.movieExists, reviewsRouter);
router.use(
  "/:movieId([0-9]+)/theaters",
  controller.movieExists,
  theatersRouter
);

// Routes
router.route("/").get(controller.list).all(methodNotAllowed);
router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

module.exports = router;
