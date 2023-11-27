import { RequestFindAccount, ResponseFindAccount } from "../../entities/accounts"; 
export interface FindOneAccountUseCase   { 
    execute(params: RequestFindAccount): Promise<ResponseFindAccount>; 
}
