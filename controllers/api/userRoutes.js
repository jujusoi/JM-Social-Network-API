const user = require('express').Router();

user.get('/', (req, res) => {
    res.status(200).json(`Get works`);
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = user;