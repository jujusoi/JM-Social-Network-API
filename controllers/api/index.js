const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json(`Get works`);
}).post('/', (req, res) => {
    res.status(200).json(`Post works`);
});

module.exports = router;