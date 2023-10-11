const thoughts = require('express').Router();
const { Thought } = require('../../models');

thoughts.get('/', async (req, res) => {
    try {
        const thoughtData = await Thought.find().select('-__v');
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = thoughts;