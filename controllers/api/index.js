const router = require('express').Router();
const reaction = require('./reactionRoutes');
const thoughts = require('./thoughtsRoutes');
const user = require('./userRoutes');

router.get('/', (req, res) => {
    res.status(200).json(`Use /users, /thoughts, or /reactions to view, update and delete data`);
});

router.use('/reactions', reaction);
router.use('/thoughts', thoughts);
router.use('/users', user);


module.exports = router;