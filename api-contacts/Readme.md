# API Contacts

A simple project API about contacts people
and have CRUD and expected return 
with success(both consultation how much bolean).


### Tools Development:
- Graphql(API query languages);
- Knex(Migrations DB);
- Docker(with the postgres SQL);

### Tutorial

Before clone the project first, we go start this command 
new container for database;

```bash
  docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=<insert_password> -d <insert_user>
``` 
And Now, clone the project created:
```bash
  npm start
```
After install the dependencys exist in the package.json:
```bash
  npm i
```

And ending, To deploy this project run
```bash
  npm start
```

# Author

- [@Gabr1el94](https://www.github.com/Gabr1el94)
