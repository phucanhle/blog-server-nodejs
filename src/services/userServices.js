const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const userServices = {
    hashPassword: async (password) => {
        try {
            const hashedPassword = await bcrypt.hash(password, 10); // Sử dụng salt có độ dài là 10
            return hashedPassword;
        } catch (error) {
            throw error;
        }
    },

    createUser: async (userData) => {
        try {
            // Hass password before save data
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            userData.password = hashedPassword;
            const newUser = await User.create(userData);
            return newUser;
        } catch (error) {
            throw error;
        }
    },

    getUserByUsername: async (username) => {
        try {
            const user = await User.findOne({ username });
            return user;
        } catch (error) {
            throw error;
        }
    },

    validatePassword: async (user, password) => {
        try {
            return await bcrypt.compare(password, user.password);
        } catch (error) {
            throw error;
        }
    },

    getUserByEmail: async (email) => {
        try {
            const user = await User.findOne({ email });
            return user;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            const user = await User.findById(userId);
            return user;
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (userId, updatedData) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            await User.findByIdAndDelete(userId);
        } catch (error) {
            throw error;
        }
    },
};

module.exports = userServices;
