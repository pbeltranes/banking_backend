

// domain/use-cases/contact/-get-all-contacts.ts
import { RequestAccounts, ResponseAccounts } from "../../domain/entities/accounts";
import { AccountRepository } from "../../domain/infrastructure/repositories/accounts-repository";
import { CreateAccountUseCase } from "../../domain/application/accounts/create";

export class CreateAccount implements CreateAccountUseCase {
    accountRepository: AccountRepository
    constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute(params: RequestAccounts): Promise<ResponseAccounts> {
        return this.accountRepository.create(params)

    }
}