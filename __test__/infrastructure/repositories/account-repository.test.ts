//test/domain/repositories/contact-repository.test.ts
import { AccountDataSource } from "../../../src/domain/infrastructure/database/account";
import {
  Account,
  ResponseAccounts,
} from "../../../src/domain/entities/accounts";
import { AccountRepository } from "../../../src/domain/infrastructure/repositories/accounts-repository";
import { AccountRepositoryImp } from "../../../src/infrastructure/repositories/account-repository";

class MockAccountDataSource implements AccountDataSource {
  insertOne(account: Account): Promise<ResponseAccounts> {
    throw new Error("Method not implemented.");
  }
}

const mockData = <ResponseAccounts>{
  id: 1111,
};
const data = <Account>{
  name: "string",
  account_number: "string",
  initial_balance: 111,
};
describe("Accounts Repository", () => {
  let mockAccountDataSource: MockAccountDataSource;
  let accountRepository: AccountRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockAccountDataSource = new MockAccountDataSource();
    accountRepository = new AccountRepositoryImp(mockAccountDataSource);
  });

  describe("insert", () => {
    test("should return data", async () => {
      jest
        .spyOn(mockAccountDataSource, "insertOne")
        .mockImplementation(() => Promise.resolve(mockData));
      const result = await accountRepository.create(data);
      expect(result).toStrictEqual(mockData);
    });
  });


});
