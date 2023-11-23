// Libs
import { BSON } from "mongodb";
// Interfaces
import { TransactionDataSource } from "../../domain/infrastructure/database/transation";
import { DatabaseWrapper } from "../../domain/infrastructure/database/database-wrapper";
// Entities
import {
  Transaction,
  ResponseTransaction,
} from "../../domain/entities/transactions";

export class MongoDBTransactionDataSource implements TransactionDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
  }

  async insertOne(transaction: Transaction): Promise<ResponseTransaction> {
    const result = await this.database.insertOne(transaction);
    return result as ResponseTransaction;
  }
}
