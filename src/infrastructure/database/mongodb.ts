// Datasources
import { MongoDBAccountDataSource } from "./account";
import { MongoDBTransactionDataSource } from "./transction";

// Libs
import { MongoClient, MongoClientOptions, Db } from "mongodb";
import config from "../../configs";
// Interfaces
import { DatabaseWrapper } from "../../domain/infrastructure/database/database-wrapper";

function connectDB() {
  // Database URL
  const { DB_NAME, DB_USER, DB_PASS, DB_CONNECTION, DB_HOST, NODE_ENV } =
    config;
  const dbURL = DB_CONNECTION
    ? DB_CONNECTION
    : `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}?retryWrites=true&w=majority`;
  // Import the mongoose module
  const options: MongoClientOptions = {
    maxPoolSize: 5,
    /** The minimum number of connections in the connection pool. */
    minPoolSize: 1,
    /** The maximum number of connections that may be in the process of being established concurrently by the connection pool. */
    maxIdleTimeMS: 10000,
  };

  async function connection(): Promise<Db> {
    try {
      const client = new MongoClient(dbURL, options);
      await client.connect();
      console.log(dbURL, DB_NAME);
      console.log("<<<< Connected to MongoDB >>>>");
      const db = client.db("test");
      return db;
    } catch (error) {
      console.error("MongoDB Connection Error: ", error);
      process.exit(1);
    }
  }

  return connection();
}

export async function getMongoDS() {
  const db = await connectDB();

  const collectionAccount = db.collection("accounts");
  const collectionTransaction = db.collection("transactions");
  const accountDatabase: DatabaseWrapper = {
    // find: (query: Query) =>
    //   collectionVideoInfo
    //     .find(query.search)
    //     .limit(query.limit)
    //     .skip(query.skip)
    //     .toArray(),
    insertOne: (doc) => collectionAccount.insertOne(doc),
    // findOne: (query) => collectionVideoInfo.findOne(query),
    // updateOne: (id, data: object) => collectionVideoInfo.updateOne(id, data),
    //deleteOne: (id: String) => db.collection("contacts").deleteOne({ _id: id }),
  };

  const transactionDatabase: DatabaseWrapper = {
    insertOne: (doc) => collectionTransaction.insertOne(doc),
  };

  interceptMethodCalls(accountDatabase, logger);
  interceptMethodCalls(transactionDatabase, logger);
  const Account = new MongoDBAccountDataSource(accountDatabase);
  const Transaction = new MongoDBTransactionDataSource(transactionDatabase);
  return { Account, Transaction };
}

const logger = (fnName, fnArgs) =>
  console.log(`${fnName} called with `, fnArgs);

const interceptMethodCalls = (
  obj: any,
  fn: (arg0: any, arg1: any[]) => void
) => {
  Object.keys(obj).forEach((key) => {
    const prop = obj[key]; // get function from object
    if (typeof prop === "function") {
      const origProp = prop;
      obj[key] = function (...args) {
        fn(origProp, args);
        return Reflect.apply(origProp, obj, args);
      };
    }
  });
};
