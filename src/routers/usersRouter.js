//user router
const router = require("express").Router();
const userControllers = require("../controllers/usersController");

router.post("/sign-up", userControllers.signUp);
router.post("/log-in", userControllers.logIn);

module.exports = router;
