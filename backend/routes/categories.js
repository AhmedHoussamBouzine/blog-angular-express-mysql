var express = require('express');
var router = express.Router();

/* GET  all categories */
router.get('/', function (req, res, next) {
    const { take, skip } = req.query;
    res.send('respond with a resource');
});

/* GET a categorie by id */

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});

/* POST a categorie */
router.post('/', (req, res, next) => {
    const categorie = req.body;
    res.send(categorie);
});

/* UPDATE a categorie */
router.patch('/', (req, res, next) => {
    const categorie = req.body;
    res.send(categorie);
});

/* DELETE a categorie */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});
module.exports = router;
