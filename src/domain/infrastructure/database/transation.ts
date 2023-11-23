import {
  ResponseTransaction,
  RequestTransaction,
} from "../../entities/transactions";
// import { Query } from "./data-base-wrapper";

export interface TransactionDataSource {
  insertOne(transaction: RequestTransaction): Promise<ResponseTransaction>;
}
