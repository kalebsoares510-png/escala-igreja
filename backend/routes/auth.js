const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Mock database
let users = [];

// Register endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered');
});

// Login endpoint
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(403).send('Invalid credentials');
    }
    const token = jwt.sign({ username: user.username }, 'secret_key');  // Replace 'secret_key' with a strong key
    res.json({ token });
});

// Verify token endpoint
router.get('/verify', (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        res.json({ valid: true, user });
    });
});

module.exports = router;