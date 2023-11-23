import { RequestAccounts, ResponseAccounts } from "../../entities/accounts"; 
export interface CreateAccountUseCase   { 
    execute(params: RequestAccounts): Promise<ResponseAccounts>; 
}
