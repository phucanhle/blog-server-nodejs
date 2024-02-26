//main router
const router = require("express").Router();
const usersRouter = require("./usersRouter");
const postsRouter = require("./postsRouter");
const dataUser = require("../middlewares/authUtils");
router.get("/", dataUser.verifyToken, (req, res) => {
    res.send({ status: "OK", msg: "Routers.", req: req.params });
});

router.use("/users", usersRouter);
router.use("/posts", postsRouter);

module.exports = router;
