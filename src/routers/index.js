//main router
const router = require("express").Router();
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");
router.get("/", (req, res) => {
    res.send({ status: "OK", msg: "Server is working." });
});
router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
