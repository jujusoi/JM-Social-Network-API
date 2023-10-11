const router = require('express').Router();
const reaction = require('./reactionRoutes');
const thoughts = require('./thoughtsRoutes');
const user = require('./userRoutes');

router.get('/', (req, res) => {
    res.status(200).json(`Get works`);
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = router;