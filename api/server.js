const express = require('express');
const server = express();


server.get('/api/users', (req, res) => {
    res.status(200).json(users)
});

module.exports = server;