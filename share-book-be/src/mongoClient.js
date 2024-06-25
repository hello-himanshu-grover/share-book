const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = process.env.DB_STRING;

class MongoDBClient {
  constructor() {
    this.client = new MongoClient(uri);
  }

  async connect() {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  getClient() {
    return this.client;
  }

  async close() {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
  }
}

// Export singleton instance of MongoDBClient
module.exports = new MongoDBClient();
