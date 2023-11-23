// Libs
import { BSON } from "mongodb";
// Interfaces
import { AccountDataSource } from "../../domain/infrastructure/database/account";
import {
  DatabaseWrapper,
} from "../../domain/infrastructure/database/database-wrapper";
// Entities
import { Account, ResponseAccounts } from "../../domain/entities/accounts";

export class MongoDBAccountDataSource implements AccountDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
  }

  async insertOne(account: Account): Promise<ResponseAccounts> {
    const result = await this.database.insertOne(account);
    return result as ResponseAccounts;
  }



}
