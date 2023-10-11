const router = require('express').Router();
const api = require('./api');

router.get('/', (req, res) => {
    res.status(200).json(`Get works`);
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

router.use('/api', api);

module.exports = router;