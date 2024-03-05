// index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret_key';

// Sample user data (In a real application, users should be stored in a database)
const users = [
    { id: 1, username: 'admin', password: '$2a$10$AdGShcvArqP3TP5EdG3K0eVYpmAyW0tMWGNzq6B9akXSTZDFGc0Iy' } // Password is 'password'
];

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Route for user login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (!user) return res.status(400).send('User not found');

    // Compare passwords
    if (bcrypt.compareSync(password, user.password)) {
        const accessToken = jwt.sign({ username: user.username }, JWT_SECRET);
        res.json({ accessToken });
    } else {
        res.status(401).send('Invalid password');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
