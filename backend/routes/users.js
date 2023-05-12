var express = require('express');
var router = express.Router();

/* GET  all users */
router.get('/', function (req, res, next) {
    const { take, skip } = req.query;
    res.send('respond with a resource');
});

/* GET a user by id */

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});

/* POST a user */
router.post('/', (req, res, next) => {
    const user = req.body;
    res.send(user);
});

/* UPDATE a user */
router.patch('/', (req, res, next) => {
    const user = req.body;
    res.send(user);
});

/* DELETE a user */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});
module.exports = router;
