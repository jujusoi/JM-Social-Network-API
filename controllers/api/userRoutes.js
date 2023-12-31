const user = require('express').Router();
const { User, Thought, Reaction } = require('../../models');

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
        res.status(500).json({ message: `Request failed: ${err}` });
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
        res.status(500).json({ message: `Request failed: ${err}` });
    };
})
.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json({ message: `Request failed: ${err}` });
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
        res.status(500).json({ message: `Request failed: ${err}` });
    };
})
.delete('/:userId', async (req, res) => {
    try {
        const userData = await User.findOne({ _id: req.params.userId });
        const deleteData = await User.deleteOne({ _id: req.params.userId });
        if (!deleteData) {
            return res.status(404).json(`UserId not found`);
        };
        const deleteThoughts = await Thought.deleteMany({ username: userData.username });
        if (!deleteThoughts) {
            return res.status(404).json(`Deleted user but thoughts not found`);
        };
        const deleteReactions = await Reaction.deleteMany({ username: userData.username });
        if (!deleteReactions) {
            return res.status(404).json(`Deleted user and thoughts but reactions not found`);
        };
        res.status(200).json(`User deleted`);
    } catch (err) {
        res.status(500).json({ message: `Request failed: ${err}` });
    };
})
.post('/:userId/friends/:friendId', async (req, res) => {
    try {
        const friendData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );
        const newFriendData = await User.findOneAndUpdate(
            { _id: req.params.friendId },
            { $push: { friends: req.params.userId } },
            { runValidators: true, new: true },
        );
        if (friendData && newFriendData) {
            res.status(200).json(`Successfully added friends`);
        } else {
            res.status(404).json(`FriendId or UserId not found`);
        };
    } catch (err) {
        res.status(500).json({ message: `Request failed: ${err}` });
    };
}).delete('/:userId/friends/:friendId', async (req, res) => {
    try {
        const friendData = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true },
        );
        const newFriendData = await User.findOneAndUpdate(
            { _id: req.params.friendId },
            { $pull: { friends: req.params.userId } },
            { runValidators: true, new: true },
        );
        if (friendData && newFriendData) {
            res.status(200).json(`Successfully removed friends`);
        } else {
            res.status(404).json(`FriendId or UserId not found`);
        };
    } catch (err) {
        res.status(500).json({ message: `Request failed: ${err}` });
    };
});

module.exports = user;