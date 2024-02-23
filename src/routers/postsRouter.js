//posts router

const router = require("express").Router();
const postsController = require("../controllers/postsController");

router.get("/", postsController.loadAllPost);
router.get("/:id", postsController.loadOnePost);
router.post("/", postsController.createNewPost);
router.put("/like/:id", postsController.likeAPost);
router.get("/comment/:id", postsController.loadAllComments);
router.put("/comment/:id", postsController.commentAPost);

module.exports = router;
