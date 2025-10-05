const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
const dbName = 'plp_bookstore';

async function connect() {
  await client.connect();
  return client.db(dbName);
}

module.exports = { connect };