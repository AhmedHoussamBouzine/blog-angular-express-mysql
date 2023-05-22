const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function seed() {
    try {
        await prisma.Utilisateur.deleteMany();
        await prisma.Categorie.deleteMany();
        await prisma.Article.deleteMany();
        await prisma.Commentaire.deleteMany();

        for (let i = 0; i < 10; i++) {
            await prisma.Utilisateur.create({
                data: {
                    nom: faker.person.fullName(),
                    email: faker.internet.email(),
                    password: await bcrypt.hash(faker.internet.password(), 10),
                    role: 'AUTHOR',
                },
            });
        }

        await prisma.Utilisateur.create({
            data: {
                nom: faker.person.fullName(),
                email: faker.internet.email(),
                password: await bcrypt.hash(faker.internet.password(), 10),
                role: 'ADMIN',
            },
        });
        const categories = []
        for (let i = 0; i < 10; i++) {
            categories.push(
                await prisma.Categorie.create({
                    data: {
                        nom: faker.lorem.word(),
                    },
                })
            )
        }

        const utilisateurs = await prisma.Utilisateur.findMany({
            where: { role: 'AUTHOR' },
        });



        for (let i = 0; i < 100; i++) {
            const utilisateur = faker.helpers.arrayElement(utilisateurs);

            const categoriesOnArticle = faker.helpers.arrayElements(categories, faker.number.int({ min: 1, max: 6 }));

            const article = await prisma.Article.create({
                data: {
                    titre: faker.lorem.sentence(),
                    contenu: faker.lorem.paragraphs(),
                    image: faker.image.url(),
                    published: true,
                    utilisateur: {
                        connect: { id: utilisateur.id },
                    },
                    categories: {
                        connect: categoriesOnArticle.map((categorie) => ({ id: categorie.id })),

                    },
                },
            });


            const nbrCommentaires = faker.number.int({ min: 0, max: 20 });
            for (let j = 0; j < nbrCommentaires; j++) {
                await prisma.Commentaire.create({
                    data: {
                        email: faker.internet.email(),
                        contenu: faker.lorem.sentence(),
                        article: {
                            connect: { id: article.id },
                        },
                    },
                });
            }
        }

        console.log("ok");
    } catch (error) {
        console.error( error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
