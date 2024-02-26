const postServices = require("../services/postServices"); 

exports.loadAllPost = async (req, res) => {
    try {
        const allPosts = await postServices.findAllPosts();
        return res.status(200).send({ message: "Load success", data: allPosts });
    } catch (error) {
        console.error("Error", error);
        res.status(500).send("Load failed.");
    }
};

exports.createNewPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const _id = req.params.decoded.id;

        const newPost = await postServices.createPost({ author: _id, title, content });

        res.status(200).send({ message: "Created.", data: newPost });
    } catch (error) {
        console.error("Error", error);
        res.status(500).send("Error");
    }
};

exports.loadOnePost = async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await postServices.findOnePost(postId);

        if (post) {
            return res.status(200).send({ message: "Success", post });
        } else {
            return res.status(404).send({ message: "Post not found" });
        }
    } catch (error) {
        console.error("Error", error);
        res.status(500).send("Error");
    }
};

exports.likeAPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postServices.likeAPost(postId);

        if (updatedPost) {
            res.status(200).json({ message: "Liked", likes: updatedPost.likes });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.error("Error when liked", error);
        res.status(500).json({ message: "Error." });
    }
};

exports.commentAPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { commenter, text } = req.body;
        const updatedPost = await postServices.commentAPost(postId, { commenter, text });

        if (updatedPost) {
            const newComment = updatedPost.comments[updatedPost.comments.length - 1];
            res.status(200).json({ message: "Comment added", comment: newComment });
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.error("Error when comment:", error);
        res.status(500).json({ message: "Error" });
    }
};

exports.loadAllComments = async (req, res) => {
    try {
        const postId = req.params.id;
        const comments = await postServices.loadAllComments(postId);

        if (comments) {
            res.status(200).json(comments);
        } else {
            res.status(404).json({ message: "Post not found" });
        }
    } catch (error) {
        console.error("Error when load comments: ", error);
        res.status(500).json({ message: "Error." });
    }
};
