var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const authMiddleware = require("../middleware/authMiddleware");
const prisma = new PrismaClient();

/* GET  all articles */
router.get('/', async function (req, res, next) {
  const { take, skip } = req.query;
  try {
    const articles = await prisma.Article.findMany({
      include: { categories: true, utilisateur: true },
      take: parseInt(take),
      skip: parseInt(skip)
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    // Cleanup and close connection
    await prisma.$disconnect();

  }
});
/* GET  Last 10 articles */
router.get('/lasttenarticles', async function (req, res, next) {
  const { take, skip } = req.query;
  try {
    const articles = await prisma.Article.findMany({
      include: { categories: true, utilisateur: true }, orderBy: {
        id: 'desc'
      },
      take: 10
    });
    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    // Cleanup and close connection
    await prisma.$disconnect();

  }
});

/* GET an article by id */

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const article = await prisma.Article.findUnique({
      where: {
        id: parseInt(id),
      },
      include: { categories: true, commentaires: true, utilisateur: true }
    });
    const articleWithCount = {
      id: article.id,
      titre: article.titre,
      contenu: article.contenu,
      image: article.image,
      published: article.published,
      commentaires: article.commentaires,
      commentairesCount: article.commentaires.length,
    }
    if (article) {
      res.status(200).send(articleWithCount);
    } else {
      res.status(404).send({ error: "Article not found" });
    }

  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    // Cleanup and close connection
    await prisma.$disconnect();
  }
});

/* POST an article */
router.post('/', authMiddleware, async (req, res, next) => {
  const { titre, contenu, image, published, utilisateurId, categorieIds } = req.body;

  try {
    const newArticle = await prisma.article.create({
      data: {
        titre,
        contenu,
        image,
        published,
        utilisateur: { connect: { id: utilisateurId } },
        categories: {
          connect: categorieIds.map((id) => ({ id })),
        },
      },
      include: { categories: true, commentaires: true },
    });

    res.status(200).send({ status: true, message: 'Article Added Successfully', article: newArticle });
  } catch (error) {
    res.status(500).json({ error: error });
  } finally {
    await prisma.$disconnect();
  }
});


/* UPDATE an article */
router.patch('/', authMiddleware, async (req, res, next) => {
  const { id, titre, contenu, image } = req.body;
  try {
    const updatedArticle = await prisma.Article.update({
      where: {
        id: parseInt(id)
      },
      data: {
        titre,
        contenu,
        image
      },
      include: { categories: true, commentaires: true }
    });
    res.status(200).send({ status: true, message: 'Article Updated Successfully', user: updatedArticle });
  } catch (error) {
    res.status(500).json({ error: error });
  } finally {
    // Cleanup and close connection
    await prisma.$disconnect();
  }
});


/* DELETE an article */
router.delete('/:id', authMiddleware, async (req, res) => {
  const id = req.params.id;
  try {
    const article = await prisma.Article.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!article) {
      res.status(404).send({ error: "Article not found" });
      return;
    }
    await prisma.Article.update({
      where: { id: parseInt(id) },
      data: {
        categories: {
          set: [],
        }
      },
    });
    await prisma.Commentaire.deleteMany({
      where: {
        articleId: parseInt(id),
      },
    })

    await prisma.Article.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).send({ status: true, message: 'Article Deleted Successfully', article: article });
  } catch (error) {
    res.status(500).send({ error: error });
  } finally {
    await prisma.$disconnect();
  }
});

module.exports = router;
