const express = require('express');
const server = express();
const cors = require('cors');
const env = require('dotenv').config();
const usersRouter= require('./users/users-router.js');

server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter)

server.get('/', (req, res) => {
    res.send(`<h2>Welcome!</h2>`)
});

module.exports = server;