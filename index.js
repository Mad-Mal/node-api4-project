const dotenv = require('dotenv').config();
const express = require("express");
const cors = require("cors");
const server = require('./api/server.js');
const app = express()
const port = process.env.PORT || 1234;

server.use(cors());
server.use(express.json());

app.use("/api/*", (_, res) => {
    res.json({
        "users": [
            {
                user: 'Victoria',
                password: 'lame-o'
            },
            {
                user: 'Mallory',
                passwoord: 'Dabomb'
            },
            {
                user: 'Monica',
                password: 'dAuLTRAbOMB'
            }
        ]
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});