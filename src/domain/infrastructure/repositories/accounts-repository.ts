import { RequestAccounts, ResponseAccounts } from "../../entities/accounts";

export interface AccountRepository {
  create(
    params: RequestAccounts
  ): Promise<ResponseAccounts>;
}
