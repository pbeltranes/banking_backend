import { RequestTransaction, ResponseTransaction } from "../../entities/transactions";

export interface TransactionRepository {
  create(
    params: RequestTransaction
  ): Promise<ResponseTransaction>;
}
