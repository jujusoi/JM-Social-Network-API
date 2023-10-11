const user = require('express').Router();
const { User, Thought } = require('../../models');

user
.get('/', async (req, res) => {
    try {
        const userData = await User.find().populate('thoughts', '-__v').select('-__v');
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json(`No users found`);
        }
    } catch (err) {
        res.status(500).json(err);
    };
})
.get('/:userId', async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.userId }).populate('thoughts', '-__v').populate('friends').select('-__v');
        if (userData) {
            res.status(200).json(userData);
        } else {
            res.status(404).json(`UserId not found`);
        }
    } catch (err) {
        res.status(500).json(err);
    };
})
.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    };
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
.delete('/:userId', async (req, res) => {
    try {
        const deleteData = await User.deleteOne(
            { _id: req.params.userId },
        );
        if (!deleteData) {
            return res.status(404).json(`UserId not found`);
        };
        res.status(200).json(`User deleted`);
    } catch (err) {
        res.status(500).json(err);
    };
})
.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const friendData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );
        if (friendData) {
            res.status(200).json(`Successfully added friend`);
        } else {
            res.status(404).json(`FriendId or UserId not found`);
        };
    } catch (err) {
        res.status(500).json(err);
    };
}).delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const friendData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true },
        );
        if (friendData) {
            res.status(200).json(`Successfully removed friend`);
        } else {
            res.status(404).json(`FriendId or UserId not found`);
        };
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = user;