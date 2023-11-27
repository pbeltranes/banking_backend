import { ResponseAccountsRepository, Account, RequestFindAccount, ResponseFindAccount } from "../../entities/accounts";
// import { Query } from "./data-base-wrapper";

export interface AccountDataSource {
  insertOne(account: Account): Promise<ResponseAccountsRepository>;
  findOne(account: RequestFindAccount): Promise<ResponseFindAccount>;
}
