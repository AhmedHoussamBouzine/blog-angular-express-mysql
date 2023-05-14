var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

/* GET  all users */
router.get('/', async (req, res, next) => {
    const { take, skip } = req.query;
    try {
        const utilisateurs = await prisma.Utilisateur.findMany();
        // res.send(utilisateurs.splice(take,skip));
        res.send(utilisateurs);
    } catch (error) {
        res.status(500).send({ error: error });
    }
});

/* GET a user by id */

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const user = await prisma.Utilisateur.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.send(user);
    } catch (error) {
        res.status(500).send({ error: error });
    }
});

/* POST a user */
router.post('/', async (req, res, next) => {
    const { nom, email, password, role } = req.body;
    try {
      const newUser = await prisma.Utilisateur.create({
        data: {
          nom,
          email,
          password,
          role,
        },
      });
      res.send({ status: true, message: 'User Created Successfully', data: newUser.id });
    } catch (error) {
      res.status(500).send({ error: error })
    }
  });
  

/* UPDATE a user */
router.patch('/', async (req, res, next) => {
    const { id, nom, email, password, role } = req.body;
    try {
      const updateUser = await prisma.Utilisateur.update({
        where: {
          id: id,
        },
        data: {
          nom,
          email,
          password,
          role,
        },
      });
      res.send({ status: true, message: 'User Updated Successfully', user: updateUser });
    } catch (error) {
      res.status(500).send({status: false, error: error});
    }
  });
  
/* DELETE a user */
router.delete('/:id',async (req, res, next) => {
    const id = req.params.id;
    try {
        const deleteUser = await prisma.Utilisateur.delete({
            where: {
              id: parseInt(id),
            },
          })
        res.send({ status: true, message: 'User Deleted Successfully', user: deleteUser });
      } catch (error) {
        res.status(500).send({status: false, error: error});
      }
});
module.exports = router;
