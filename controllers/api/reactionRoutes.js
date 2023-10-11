const reaction = require('express').Router();
const { Reaction } = require('../../models');
reaction.get('/', async (req, res) => {
    try {
        const reactionData = await Reaction.find().select('-__v');
        if (reactionData) {
            res.status(200).json(reactionData);
        } else {
            res.status(404).json(`No reactions found`);
        };
    } catch (err) {
        res.status(500).json(err);
    }
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = reaction;