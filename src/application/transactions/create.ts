

// domain/use-cases/contact/-get-all-contacts.ts
import { RequestTransaction, ResponseTransaction } from "../../domain/entities/transactions";
import { TransactionRepository } from "../../domain/infrastructure/repositories/transactions-repository";
import { CreateTransactionUseCase } from "../../domain/application/transactions/create";

export class CreateTransaction implements CreateTransactionUseCase {
    transactionRepository: TransactionRepository
    constructor(rekognitionRepository: TransactionRepository) {
        this.transactionRepository = rekognitionRepository
    }

    async execute(params: RequestTransaction): Promise<ResponseTransaction> {
        return this.transactionRepository.create(params)

    }
}