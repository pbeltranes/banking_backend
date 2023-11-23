// import { Query } from "../infrastructure/data-base-wrapper";

// interfaces
import { AccountDataSource } from "../../domain/infrastructure/database/account";
import { AccountRepository } from "../../domain/infrastructure/repositories/accounts-repository";
// Entitites
import { Account, ResponseAccounts } from "../../domain/entities/accounts";

export class AccountRepositoryImp implements AccountRepository {
    accountDataSource: AccountDataSource;
  constructor(accountDataSource: AccountDataSource) {
    this.accountDataSource = accountDataSource;
  }

  async create(data: Account): Promise<ResponseAccounts> {
    const result = await this.accountDataSource.insertOne(data);
    return result;
  }
}
