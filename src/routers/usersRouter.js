//user router
const router = require("express").Router();
const userControllers = require("../controllers/usersController");
const dataUser = require("../middlewares/dataUser");

router.post("/sign-up", dataUser.validateSignUp, userControllers.signUp);
router.post("/log-in", dataUser.validateLogIn, userControllers.logIn);
router.get("/:id/all-posts", userControllers.loadOneUserWithPosts);
router.get("/:id", userControllers.loadOneUser);

module.exports = router;
