const Posts = require("../models/postModel");
const Users = require("../models/userModel");

exports.loadAllPost = async (req, res) => {
    try {
        const allPost = await Posts.find();
        return res.status(200).send({ message: "Load success", data: allPost });
    } catch (error) {
        console.error("Error", error);
        res.status(500).send("Load failed.");
    }
};
exports.createNewPost = async (req, res) => {
    try {
        const { title, content, _id } = req.body;
        const newPost = new Posts({ author: _id, title, content });
        await newPost.save();

        res.status(200).send("Created.");
    } catch (error) {
        console.error("Error", error);
        res.status(500).send("Error");
    }
};
exports.loadOnePost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);
        if (post) {
            return res.status(200).send({ message: "Success", data: post });
        }
    } catch (error) {
        console.error("Error", error);
        res.status(200).send("Error");
    }
};
exports.likeAPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post is not existing." });
        }
        post.likes += 1;

        await post.save();
        res.status(200).json({ message: "Liked", likes: post.likes });
    } catch (error) {
        console.error("Error when liked", error);
        res.status(500).json({ message: "Error." });
    }
};
exports.commentAPost = async (req, res) => {
    try {
        const postId = req.params.id;
        const { commenter, text } = req.body;

        const post = await Posts.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post is not existing." });
        }

        post.comments.push({ commenter, text });

        await post.save();

        res.status(200).json({ message: "Comment added:", comment: post.comments[post.comments.length - 1] });
    } catch (error) {
        console.error("Error when comment:", error);
        res.status(500).json({ message: "Error" });
    }
};
exports.loadAllComments = async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await Posts.findById(postId, "comments");

        if (!post) {
            return res.status(404).json({ message: "Post is not existing." });
        }
        res.status(200).json(post.comments);
    } catch (error) {
        console.error("Error when load comments: ", error);
        res.status(500).json({ message: "Error." });
    }
};
