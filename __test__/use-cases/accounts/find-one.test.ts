import {
  RequestAccounts,
  RequestFindAccount,
  ResponseAccounts,
  ResponseFindAccount,
} from "../../../src/domain/entities/accounts";
import { AccountRepository } from "../../../src/domain/infrastructure/repositories/accounts-repository";
import { FindOneAccount } from "../../../src/application/accounts/find-one";
import { generateUniqueId } from "../../../src/configs/utils";

describe("Find one account Use Case", () => {
  class MockAccountRespository implements AccountRepository {
    create(params: RequestAccounts): Promise<ResponseAccounts> {
      throw new Error("Method not implemented.");
    }
    findOne(data: RequestFindAccount): Promise<ResponseFindAccount> {
      throw new Error("Method not implemented.");
    }
  }

  const mockData = <ResponseFindAccount>{
    name: "string",
    account_number: 1111111111111111,
    initial_balance: 100000,
    account_id: generateUniqueId(1111111111111111),
    id: 1111,
  };
  const params: RequestFindAccount = {
    account_number: 1111111111111111,
  };
  let mockAccountRepository: AccountRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAccountRepository = new MockAccountRespository();
  });

  test("should return data", async () => {
    jest
      .spyOn(mockAccountRepository, "findOne")
      .mockImplementation(() => Promise.resolve(mockData));
    const findOneAccount = new FindOneAccount(mockAccountRepository);

    const result = await findOneAccount.execute(params);
    expect(result).toStrictEqual(mockData);
  });
});
