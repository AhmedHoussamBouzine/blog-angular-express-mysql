var express = require('express');
var router = express.Router();

/* GET  all articles */
router.get('/', function (req, res, next) {
    const { take, skip } = req.query;
    res.send('respond with a resource');
});

/* GET an article by id */

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});

/* POST an article */
router.post('/', (req, res, next) => {
    const article = req.body;
    res.send(article);
});

/* UPDATE an article */
router.patch('/', (req, res, next) => {
    const article = req.body;
    res.send(article);
});

/* DELETE an article */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});
module.exports = router;
