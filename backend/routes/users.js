var express = require('express');
var router = express.Router();
const bcrypt = require("bcrypt");
const authMiddleware = require("../middleware/authMiddleware");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/* GET  all users */
router.get('/', async (req, res, next) => {
  const { take, skip } = req.query;
  try {
    const utilisateurs = await prisma.Utilisateur.findMany({
      select: {
        id: true,
        nom: true,
        email: true,
        role: true
      },
      take: parseInt(take),
      skip: parseInt(skip),
    }
    );
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
      select: {
        id: true,
        email: true,
        nom: true,
        role: true,
        articles: true,
      }
    });
    res.send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

/* POST a user */
router.post('/', authMiddleware, async (req, res, next) => {
  const { nom, email, password, role } = req.body;
  try {
    const newUser = await prisma.Utilisateur.create({
      data: {
        nom,
        email,
        password: await bcrypt.hash(password, 10)
      },
    });
    res.send({ status: true, message: 'User Created Successfully', user: newUser });
  } catch (error) {
    res.status(500).send({ error: error })
  }
});


/* UPDATE a user */
router.patch('/', authMiddleware, async (req, res, next) => {
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
    res.status(500).send({ status: false, error: error });
  }
});

/* DELETE a user */
router.delete('/:id', authMiddleware, async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await prisma.Utilisateur.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    const articles = await prisma.Article.findMany({
      where: {
        utilisateurId: parseInt(user.id),
      },
    });
    articles.forEach(async article => {
      let articleId = article.id;
      await prisma.Article.update({
        where: { id: parseInt(articleId) },
        data: {
          categories: {
            set: [],
          }
        },
      });
      await prisma.Commentaire.deleteMany({
        where: {
          articleId: parseInt(articleId),
        },
      })

      await prisma.Article.delete({
        where: {
          id: parseInt(articleId),
        },
      });
    });
    const deleteUser = await prisma.Utilisateur.delete({ where: { id: parseInt(id) } });
    res.send({ status: true, message: 'User Deleted Successfully', user: deleteUser });

  } catch (error) {
    res.status(500).send({ status: false, error: error.message });
  }
});

module.exports = router;
