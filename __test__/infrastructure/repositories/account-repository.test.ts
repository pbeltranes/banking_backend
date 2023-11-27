//test/domain/repositories/contact-repository.test.ts
import { AccountDataSource } from "../../../src/domain/infrastructure/database/account";
import {
  Account,
  RequestFindAccount,
  ResponseAccountsRepository,
  ResponseFindAccount,
} from "../../../src/domain/entities/accounts";
import { AccountRepository } from "../../../src/domain/infrastructure/repositories/accounts-repository";
import { AccountRepositoryImp } from "../../../src/infrastructure/repositories/account-repository";
import { generateUniqueId } from "../../../src/configs/utils";
import { mock } from "node:test";

class MockAccountDataSource implements AccountDataSource {
  insertOne(account: Account): Promise<ResponseAccountsRepository> {
    throw new Error("Method not implemented.");
  }
  findOne(account: RequestFindAccount): Promise<ResponseFindAccount> {
    throw new Error("Method not implemented.");
  }
}

const mockData = <ResponseAccountsRepository>{
  acknowledged: true,
  insertedId: 1010101,
};
const data = <Account>{
  name: "string",
  account_number: 1111111111111111,
  initial_balance: 111,
  account_id: generateUniqueId(1111111111111111),
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
      expect(result).toStrictEqual({ id: mockData.insertedId });
    });
  });
});
