// Interfaces
import { AccountDataSource } from "../../domain/infrastructure/database/account";
import {
  DatabaseWrapper,
} from "../../domain/infrastructure/database/database-wrapper";
// Entities
import { Account, RequestFindAccount, ResponseAccountsRepository, ResponseFindAccount } from "../../domain/entities/accounts";

export class MongoDBAccountDataSource implements AccountDataSource {
  private database: DatabaseWrapper;
  constructor(database: DatabaseWrapper) {
    this.database = database;
  }

  async insertOne(account: Account): Promise<ResponseAccountsRepository> {
    const result = await this.database.insertOne(account);
    return result as ResponseAccountsRepository;
  }
  async findOne(params: RequestFindAccount): Promise<ResponseFindAccount> {
    const result = await this.database.findOne(params);
    return result as ResponseFindAccount;
  }



}
