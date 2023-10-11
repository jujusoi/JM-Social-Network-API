const thoughts = require('express').Router();
const { Thought, Reaction } = require('../../models');
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
        res.status(200).json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
})
.put('/:thoughtId', async (req, res) => {
    try {
        const thoughtData = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );
        if (thoughtData) {
            res.status(200).json(thoughtData);
        } else {
            res.status(404).json(`ThoughtId not found`);
        };
    } catch (err) {
        res.status(500).json(err);
    };
})
.delete('/:thoughtId', async (req, res) => {
    try {
        const thoughtData = await Thought.findOne({ _id: req.params.thoughtId });
        const deleteData = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
        if (!deleteData) {
            return res.status(404).json(`ThoughtId not found`);
        };
        const deleteReactions = await Reaction.deleteMany({ username: thoughtData.username });
        if (!deleteReactions) {
            return res.status(404).json(`Deleted thought but reactions not found`);
        };
        res.status(200).json(`Thought deleted`);  
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = thoughts;