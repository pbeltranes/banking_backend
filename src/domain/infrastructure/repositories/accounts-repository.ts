import { RequestAccounts, RequestFindAccount, ResponseAccounts, ResponseFindAccount } from "../../entities/accounts";

export interface AccountRepository {
  create(
    data: RequestAccounts
  ): Promise<ResponseAccounts>;
  findOne(
    data: RequestFindAccount
  ): Promise<ResponseFindAccount>;
}
