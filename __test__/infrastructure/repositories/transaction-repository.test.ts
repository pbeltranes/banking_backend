//test/domain/repositories/contact-repository.test.ts
import { TransactionDataSource } from "../../../src/domain/infrastructure/database/transation";
import {
  Transaction,
  RequestTransaction,
  ResponseTransaction,
} from "../../../src/domain/entities/transactions";
import { TransactionRepository } from "../../../src/domain/infrastructure/repositories/transactions-repository";
import { TransactiontRepositoryImp } from "../../../src/infrastructure/repositories/transaction-repository";

class MockTransactionDataSource implements TransactionDataSource {
  insertOne(transaction: Transaction): Promise<ResponseTransaction> {
    throw new Error("Method not implemented.");
  }
}

const mockData = <ResponseTransaction>{
  id: 1111,
};
const data = <Transaction>{
  type: "string",
  account_id: 101010,
  amount: 111,
};
describe("Accounts Repository", () => {
  let mockTransactionDataSource: MockTransactionDataSource;
  let transactionRepository: TransactionRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockTransactionDataSource = new MockTransactionDataSource();
    transactionRepository = new TransactiontRepositoryImp(
      mockTransactionDataSource
    );
  });

  describe("insert", () => {
    test("should return data", async () => {
      jest
        .spyOn(mockTransactionDataSource, "insertOne")
        .mockImplementation(() => Promise.resolve(mockData));
      const result = await transactionRepository.create(data);
      expect(result).toStrictEqual(mockData);
    });
  });
});
