const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");


// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];
//     if (!token) return res.status(403).json({ message: 'No token provided' });
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
//         req.userId = decoded.userId;
//         next();
//     });
// };


const verifyToken = (requiredRole) => {
    return (req, res, next) => {
        const token = req.headers['authorization']?.split(' ')[1];
        if (!token) return res.status(403).json({ message: 'No token provided' });

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ message: 'Failed to authenticate token' });

            console.log('Decoded token:', decoded); // Debugging line
            if (requiredRole && decoded.role !== requiredRole) {
                return res.status(403).json({ message: 'Access forbidden: insufficient rights' });
            }

            req.userId = decoded.userId;
            req.role = decoded.role;

            next();
        });
    };
};

module.exports = verifyToken;


module.exports = verifyToken;



router.get('/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});


module.exports = router;
