//Schema define for a Post
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: [
        {
            commenter: { type: String, required: true },
            text: { type: String, required: true },
            date: { type: Date, default: Date.now },
        },
    ],
});

// Tạo mô hình từ Schema
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
