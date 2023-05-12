var express = require('express');
var router = express.Router();

/* GET  all commentaires */
router.get('/', function (req, res, next) {
    const { take, skip } = req.query;
    res.send('respond with a resource');
});

/* GET a commentaire by id */

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});

/* POST a commentaire */
router.post('/', (req, res, next) => {
    const commentaire = req.body;
    res.send(commentaire);
});

/* UPDATE a commentaire */
router.patch('/', (req, res, next) => {
    const commentaire = req.body;
    res.send(commentaire);
});

/* DELETE a commentaire */
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.send(id);
});
module.exports = router;
