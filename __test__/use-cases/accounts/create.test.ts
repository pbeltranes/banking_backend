import {
  RequestAccounts,
  ResponseAccounts,
} from "../../../src/domain/entities/accounts";
import { AccountRepository } from "../../../src/domain/infrastructure/repositories/accounts-repository";
import { CreateAccount } from "../../../src/application/accounts/create";

describe("Get All Contacts Use Case", () => {
  class MockAccountRespository implements AccountRepository {
    create(params: RequestAccounts): Promise<ResponseAccounts> {
      throw new Error("Method not implemented.");
    }
  }

  const mockData = <ResponseAccounts>{
    id: 1111,
  };

  let mockAccountRepository: AccountRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAccountRepository = new MockAccountRespository();
  });

  test("should return data", async () => {
    jest
      .spyOn(mockAccountRepository, "create")
      .mockImplementation(() => Promise.resolve(mockData));
    const createAccount = new CreateAccount(mockAccountRepository);

    const params: RequestAccounts = {
      name: "string",
      account_number: "string",
      initial_balance: 111,
    };
    const result = await createAccount.execute(params);
    expect(result).toStrictEqual(mockData);
  });
});
