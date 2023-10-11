const user = require('express').Router();
const { User } = require('../../models');

user
.get('/', async (req, res) => {
    try {
        const userData = await User.find().populate('thoughts', '-__v').select('-__v');
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})
.post('/', (req, res) => {
    res.status(200).json(`Post works`);
})
.put('/:userId', async (req, res) => {
    try {
        const userData = await User.findOneAndUpdate(
            { _id: req.params.userId},
            { $set: req.body },
            { runValidators: true, new: true }
        );
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
})
.get('/:userId/friends', async (req, res) => {
    try {
        res.status(200).json(`friend works`);
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = user;