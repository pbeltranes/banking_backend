// import { Query } from "../infrastructure/data-base-wrapper";

// interfaces
import { AccountDataSource } from "../../domain/infrastructure/database/account";
import { AccountRepository } from "../../domain/infrastructure/repositories/accounts-repository";
// Entitites
import {
  RequestAccounts,
  RequestFindAccount,
  ResponseAccounts,
  ResponseFindAccount,
} from "../../domain/entities/accounts";

export class AccountRepositoryImp implements AccountRepository {
  accountDataSource: AccountDataSource;
  constructor(accountDataSource: AccountDataSource) {
    this.accountDataSource = accountDataSource;
  }

  async create(data: RequestAccounts): Promise<ResponseAccounts> {
    const { insertedId } = await this.accountDataSource.insertOne(data);
    return { id: insertedId };
  }
  async findOne(data: RequestFindAccount): Promise<ResponseFindAccount> {
    const result = await this.accountDataSource.findOne(data);
    return result;
  }
}
