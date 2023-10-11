const thoughts = require('express').Router();
const { Thought } = require('../../models');

thoughts
.get('/', async (req, res) => {
    try {
        const thoughtData = await Thought.find().populate('reactions', '-__v').select('-__v');
        res.status(200).json(thoughtData);
    } catch (err) {
        res.status(500).json(err);
    }
}).get('/:thoughtId', async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.thoughtId }).populate('reactions', '-__v').select('-__v');
        if (thoughtData) {
            res.status(200).json(thoughtData);
        } else {
            res.status(404).json(`ThoughtId not found`);
        };
    } catch (err) {
        res.status(500).json(err);
    };
})
.post('/', async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        res.status(200).json(`Thought created`);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = thoughts;