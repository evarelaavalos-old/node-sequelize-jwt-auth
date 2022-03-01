# Node JWT Auth

Backend reimplementation using Sequelize of the [Node.js Auth Tutorial (JWT) Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9iqqESP8335DA5cRFp8loyp).

See all the tutorial series of **The Net Ninja** in his [YouTube channel](https://www.youtube.com/c/TheNetNinja). See the original repo of the course [here](https://github.com/iamshaunjp/node-express-jwt-auth).


## Envinroment setup

1) Create database
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
npm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```

## Start local server

``` bash
npm start
```
