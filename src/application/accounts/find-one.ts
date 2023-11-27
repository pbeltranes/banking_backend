

// domain/use-cases/contact/-get-all-contacts.ts
import { RequestAccounts, RequestFindAccount, ResponseAccounts, ResponseFindAccount } from "../../domain/entities/accounts";
import { AccountRepository } from "../../domain/infrastructure/repositories/accounts-repository";
import { FindOneAccountUseCase } from "../../domain/application/accounts/find-one";

export class FindOneAccount implements FindOneAccountUseCase {
    accountRepository: AccountRepository
    constructor(accountRepository: AccountRepository) {
        this.accountRepository = accountRepository
    }

    async execute(data: RequestFindAccount): Promise<ResponseFindAccount> {
        return this.accountRepository.findOne(data)

    }
}