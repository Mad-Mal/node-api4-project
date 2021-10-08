const express = require('express');
const router = express.Router();
const Users = require('./users-model.js');

router.get('/', (req, res, next) => {
     Users.getUsers()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            })
        })
        next();
});

router.post('/register', (req, res) => {
    Users.insert(req.body)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(error => {
            res.status(500).json({
                message: error.message
            })
        })
});

router.post('/login', (req, res) => {

})

module.exports = router;