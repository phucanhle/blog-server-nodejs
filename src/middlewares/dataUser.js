const validateSignUp = (req, res, next) => {
    const { username, email, password, fullName, age } = req.body;

    if (!username || !email || !password || !fullName || !age) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    if (typeof age !== "number") {
        return res.status(400).json({ message: "Age must be a number." });
    }

    next();
};

const validateLogIn = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Missing required fields." });
    }
    next();
};

module.exports = {
    validateSignUp,
    validateLogIn,
};
