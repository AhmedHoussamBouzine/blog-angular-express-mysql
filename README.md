# projet-web
### Ce projet est realisé dans le cadre du projet de fin de module du module Technologies Web pour la formation ingénieur a L'ENSET Mohammedia
Ce projet est divisé en deux parties :
- une partie **frontend** réalisée avec le framework **Angular**.
- une autre **backend** réalisée avec **NodeJs** et **Express**.
Pour tester le projet on le clone d'abord avec la commande: 
```
git clone https://github.com/AhmedHoussamBouzine/projet-web.git

```
Pour la partie **backend** il faut installer `node_modules` et creer un fichier `.env` qui contient `DATABASE_URL` le lien pour la base de données et `TOKEY_KEY` en executant les commandes suivant dans le `git bash` : 

```
cd backend/
npm i 
touch .env
```
puis remplir le fichier `.env` par le code suivant : 

```
DATABASE_URL="mysql://username:yourpassword@host:port/database_name"
TOKEN_KEY = "the-secret-key"
```
Apres il faut faire la migration de la base donnees avec la commande suivant: 
```
npx prisma migrate dev
```

et lancer `seeders` pour remplir la base de donnees pour le test:

```
node seeds/seed

```










