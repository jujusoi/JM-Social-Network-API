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
})
.get('/:reactionId', async (req, res) => {
    try {
        const reactionData = await Reaction.findOne({ _id: req.params.reactionId }).select('-__v');
        if (reactionData) {
            res.status(200).json(reactionData);
        } else {
            res.status(404).json(`ReactionId not found`);
        };
    } catch (err) {
        res.status(500).json(err);
    };
})
.post('/', async (req, res) => {
    try {
        const reactionData = await Reaction.create(req.body);
        res.status(200).json(reactionData);
    } catch (err) {
        res.status(500).json(err);
    }
})
.delete('/:reactionId', async (req, res) => {
    try {
        const reactionData = await Reaction.findOneAndDelete({ _id: req.params.reactionId });
        if (reactionData) {
            res.status(200).json(`Reaction deleted`);
        } else {
            res.status(404).json(`ReactionId not found`);
        }
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = reaction;