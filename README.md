# blog-angular-express-mysql

To test the project, first clone it with the following command:
```
git clone https://github.com/AhmedHoussamBouzine/projet-web.git

```
## Backend Part:

For the backend part, install `node_modules` and create a `.env` file that contains DATABASE_URL the database link and TOKEY_KEY by executing the following commands in the git bash:

```
cd backend/
npm i 
touch .env
```
Then fill the `.env` file with the following code:

```
DATABASE_URL="mysql://username:yourpassword@host:port/database_name"
TOKEN_KEY = "the-secret-key"
```
After that, make the database migration with the following command:
```
npx prisma migrate dev
```

And run `seeders` to fill the database for testing:

```
node seeds/seed

```
Then run the project with the following command:
```
npm start
```

If port `3000` is already in use, you need to change it in /bin/www to a different port
 
## Frontend Part:

In another shell terminal, access the frontend and install `node_modules` then run the project with the following command: 

```
npm i
ng serve
```
And navigate to `http://localhost:4200/` to see the project.













