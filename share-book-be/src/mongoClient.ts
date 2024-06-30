import { MongoClient, Collection, Document } from 'mongodb';

// Replace the uri string with your connection string.
const uri: string = process.env.DB_STRING as string;

class MongoDBClient {
  private client: MongoClient;

  constructor() {
    this.client = new MongoClient(uri);
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  getCollection(collectionName: string): Collection<Document> {
    const db = this.client.db('share-book');
    return db.collection(collectionName);
  }

  async close(): Promise<void> {
    try {
      await this.client.close();
      console.log('Disconnected from MongoDB');
    } catch (error) {
      console.error('Error closing MongoDB connection:', error);
    }
  }
}

const mongoDBClient = new MongoDBClient();

export { mongoDBClient };
