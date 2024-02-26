//posts router

const router = require("express").Router();
const postsController = require("../controllers/postsController");
const userAuth = require("../middlewares/authUtils");

router.get("/", userAuth.verifyToken, postsController.loadAllPost);
router.get("/:id", userAuth.verifyToken, postsController.loadOnePost);
router.post("/", userAuth.verifyToken, postsController.createNewPost);
router.put("/like/:id", userAuth.verifyToken, postsController.likeAPost);
router.get("/comment/:id", userAuth.verifyToken, postsController.loadAllComments);
router.put("/comment/:id", userAuth.verifyToken, postsController.commentAPost);

module.exports = router;
