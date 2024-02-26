const userServices = require("../services/userServices");
const userMiddlewares = require("../middlewares/authUtils");
const postServices = require("../services/postServices");

exports.signUp = async (req, res) => {
    try {
        const existingUser = await userServices.getUserByEmail(req.body.email);
        if (!existingUser) {
            const newUser = await userServices.createUser(req.body);
            res.status(201).json({ message: "Sign up successful.", user: newUser });
        }
        return res.status(404).json({ message: "User is not existing." });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error during sign up." });
    }
};

exports.logIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await userServices.getUserByUsername(username);

        if (user) {
            const isPasswordValid = await userServices.validatePassword(user, password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Invalid password." });
            }

            return res.status(200).json({
                message: "Login success.",
                token: userMiddlewares.generateToken(user),
            });
        }

        res.status(404).json({ message: "User is not existing." });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Error during login." });
    }
};

exports.loadOneUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userServices.getUserById(id);
        if (user) {
            const { password, ...userWithoutPassword } = user._doc;
            return res.status(200).json({ message: "Login success.", user: userWithoutPassword });
        }
        res.status(404).json({ message: "User is not existing." });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Error during load user data." });
    }
};

exports.loadOneUserWithPosts = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userServices.getUserById(id);
        const posts = await postServices.findAllPostOfUser(id);
        if (user) {
            return res.status(200).json({ message: "Login success.", user, posts });
        }
        res.status(404).json({ message: "User is not existing.", user });
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ message: "Error during load user data." });
    }
};
