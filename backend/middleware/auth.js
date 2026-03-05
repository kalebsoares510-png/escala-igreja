const jwt = require('jsonwebtoken');

// Middleware to verify JWT and check user roles
function authenticateJWT(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized
    }
}

// Middleware to check user roles
function checkRole(role) {
    return (req, res, next) => {
        if (req.user && req.user.role === role) {
            next();
        } else {
            res.sendStatus(403); // Forbidden
        }
    };
}

module.exports = { authenticateJWT, checkRole };