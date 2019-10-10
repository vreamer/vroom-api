### Installation
[nodemon](https://www.npmjs.com/package/nodemon)
[mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Seed Initial Data
Local
`mongoimport --db=inventory --collection=inventoryitems --file=./data/inventory-items.seed.json --jsonArray`
Heroku
`mongoimport --uri= --db=inventory --collection=inventoryitems --file=./data/inventory-items.seed.json --jsonArray`

### Deploy to Heroku
`heroku git:remote -a app-name`