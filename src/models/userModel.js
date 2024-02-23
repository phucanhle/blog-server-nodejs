const mongoose = require("mongoose");

// Định nghĩa Schema cho mô hình Người dùng
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: { type: String, required: true },
    age: { type: Number, required: true },
    dateJoined: { type: Date, default: Date.now },
});

// Tạo mô hình từ Schema
const User = mongoose.model("User", userSchema);

module.exports = User;
