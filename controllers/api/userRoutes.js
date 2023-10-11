const user = require('express').Router();
const { User } = require('../../models');

user.get('/', async (req, res) => {
    try {
        const userData = await User.find().select('-__v');
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = user;