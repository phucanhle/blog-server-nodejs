const jwt = require("jsonwebtoken");

function generateToken(user) {
    const token = jwt.sign(
        {
            id: user._id,
            username: user.username,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
    );
    return token;
}

// Xác thực JWT từ yêu cầu
function verifyToken(req, res, next) {
    const headerAuthorization = req.headers.authorization;
    const token = headerAuthorization.replace(/^Bearer\s+/, "");

    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Unauthorized." });
        }
        req.params.decoded = decoded;
        next();
    });
}

module.exports = { generateToken, verifyToken };
