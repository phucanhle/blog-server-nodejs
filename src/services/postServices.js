const Post = require("../models/postModel");

const postServices = {
    findAllPosts: async () => {
        try {
            const posts = await Post.find();
            return posts;
        } catch (error) {
            console.error("Error fetching all posts:", error);
            throw error;
        }
    },

    findAllPostOfUser: async (userID) => {
        try {
            const posts = await Post.find({ author: userID });
            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    },

    findOnePost: async (postID) => {
        try {
            const post = await Post.findById(postID);
            return post;
        } catch (error) {
            console.error(`Error fetching post with ID ${postID}:`, error);
            throw error;
        }
    },

    createPost: async (data) => {
        try {
            const newPost = new Post(data);
            await newPost.save();
            return newPost;
        } catch (error) {
            console.error("Error creating a new post:", error);
            throw error;
        }
    },

    updatePost: async (postID, data) => {
        try {
            const post = await Post.findByIdAndUpdate(postID, data, { new: true });

            if (post) {
                console.log(`Post with ID ${postID} has been updated.`);
                return post;
            } else {
                console.error(`Post with ID ${postID} not found.`);
                return null;
            }
        } catch (error) {
            console.error(`Error updating post with ID ${postID}:`, error);
            throw error;
        }
    },
    likeAPost: async (postId) => {
        try {
            const post = await Post.findById(postId);

            if (!post) {
                return null; // Post not found
            }

            // Increment the likes count
            post.likes += 1;

            // Save the updated post
            await post.save();

            // Return the updated post
            return post;
        } catch (error) {
            console.error("Error when liking:", error);
            throw error;
        }
    },
    commentAPost: async (postId, { commenter, text }) => {
        try {
            const post = await Post.findById(postId);

            if (!post) {
                return null; // Post not found
            }

            // Add the new comment
            post.comments.push({ commenter, text });

            // Save the updated post
            await post.save();

            // Return the updated post
            return post;
        } catch (error) {
            console.error("Error when commenting:", error);
            throw error;
        }
    },

    loadAllComments: async (postID) => {
        try {
            const post = await Post.findById(postID, "comments");

            if (!post) {
                return null; // Post not found
            }

            return post.comments;
        } catch (error) {
            console.error("Error when load comments:", error);
            throw error;
        }
    },
};

module.exports = postServices;
