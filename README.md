### Installation
[nodemon](https://www.npmjs.com/package/nodemon)
[mongodb](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

### Seed Initial Data
Local
`mongoimport --db=inventory --collection=inventoryitems --file=./data/inventory-items.seed.json --jsonArray`
Heroku
`mongoimport --collection=inventoryitems --file=./data/inventory-items.seed.json --jsonArray --uri=mongodb://heroku_5003zp6h:igu5qncllpeo0ocdo0dj7nl5le@ds211275.mlab.com:11275/heroku_5003zp6h`

### Deploy to Heroku
`heroku git:remote -a app-name`