const mongoose = require("mongoose");

const connectToMongoDB = async (uri) => {
    try {
        const isConnected = await mongoose.connect(uri);
        if (isConnected) {
            console.log("Connected with MongoDB");
        }
    } catch (error) {
        throw error;
    }
};

module.exports = connectToMongoDB;
