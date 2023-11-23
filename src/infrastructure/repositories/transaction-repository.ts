// import { Query } from "../infrastructure/data-base-wrapper";

// interfaces
import { TransactionDataSource } from "../../domain/infrastructure/database/transation";
import { TransactionRepository } from "../../domain/infrastructure/repositories/transactions-repository";
// Entitites
import { Transaction, ResponseTransaction } from "../../domain/entities/transactions";

export class TransactiontRepositoryImp implements TransactionRepository {
    transactionDataSource: TransactionDataSource;
  constructor(transactionDataSource: TransactionDataSource) {
    this.transactionDataSource = transactionDataSource;
  }

  async create(data: Transaction): Promise<ResponseTransaction> {
    const result = await this.transactionDataSource.insertOne(data);
    return result;
  }
}
