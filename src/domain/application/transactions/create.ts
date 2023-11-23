import {
  RequestTransaction,
  ResponseTransaction,
} from "../../entities/transactions";
export interface CreateTransactionUseCase {
  execute(params: RequestTransaction): Promise<ResponseTransaction>;
}
