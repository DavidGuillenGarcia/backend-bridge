const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const databaseName = "MyFirstDB";

let mongoClientInstance = null;

const Connection = async () => {
  mongoClientInstance = await MongoClient.connect(uri);
  return mongoClientInstance.db(databaseName);
};

module.exports = { Connection };
