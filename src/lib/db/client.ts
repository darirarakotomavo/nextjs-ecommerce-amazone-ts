import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri, options);
  }
  client = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(uri, options);
}

export default client;

// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

// In production mode, it's best to not use a global variable.
// In development mode, use a global variable so that the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).

// Export a module-scoped MongoClient. By doing this in a
// separate module, the client can be shared across functions.
