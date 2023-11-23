import { ResponseAccounts, Account } from "../../entities/accounts";
// import { Query } from "./data-base-wrapper";

export interface AccountDataSource {
  insertOne(account: Account): Promise<ResponseAccounts>;
}
