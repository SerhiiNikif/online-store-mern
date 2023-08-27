# How to use

## 1. Clone Project into your local machine
```
git clone https://github.com/SerhiiNikif/online-store-mern.git
```

## 2. Go into project folder

```
cd online-store-mern
```

## 3. Setting environment file .env.
Create an `.env` files in the api and admin folders and fill it with the values ​​from the `.env.example` file.

__api/.env__
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<clustername>.mongodb.net/<dbname>
PASS_SEC=<secret>
JWT_SEC=<secret>
STRIPE_KEY=<private_key>
```

__client/.env__
```
REACT_APP_STRIPE=<public_key>
```

## 4. Start project

```
npm run install-all
```

first terminal
```
cd api

npm run start
```

second terminal
```
cd client
```
or
```
cd admin
```

```
npm run start
```

You can run both the client (client + admin) and the server at the same time in the same terminal:

```
npm install -g concurrently

npm run start-all
```

> It is necessary to create the first user in Postman (until registration on the client is implemented)

We go to Postman
our server is running

POST
http://localhost:5000/api/auth/register

```
{
    "username": "admin",
    "email": "admin@gmail.com",
    "password": "123456",
    "isAdmin": true
}

```

That's it, now we can log in on the client and admin pages
