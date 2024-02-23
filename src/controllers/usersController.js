const User = require("../models/userModel");

exports.signUp = async (req, res) => {
    const { username, email, password, fullName, age } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User is existing." });
        }
        const newUser = new User({ username, email, password, fullName, age });
        await newUser.save();
        res.status(201).json({ message: "Sign up successful." });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error." });
    }
};

exports.logIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingUser = await User.findOne({ username: username });
        if (!existingUser) {
            return res.status(300).send("User is not existing.");
        }
        if (existingUser.password === password) {
            return res.status(200).send({ message: "Login success.", user: existingUser });
        }
        res.status(200).send("Failed");
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Error");
    }
};
