import {
  RequestTransaction,
  ResponseTransaction,
} from "../../../src/domain/entities/transactions";
import { TransactionRepository } from "../../../src/domain/infrastructure/repositories/transactions-repository";
import { CreateTransaction } from "../../../src/application/transactions/create";

describe("Get All Contacts Use Case", () => {
  class MockTransactionRepository implements TransactionRepository {
    create(params: RequestTransaction): Promise<ResponseTransaction> {
      throw new Error("Method not implemented.");
    }
  }

  const mockData = <ResponseTransaction>{
    id: 1111,
  };

  let mockTransactionRepository: TransactionRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    mockTransactionRepository = new MockTransactionRepository();
  });

  test("should return data", async () => {
    jest
      .spyOn(mockTransactionRepository, "create")
      .mockImplementation(() => Promise.resolve(mockData));
    const createTransaction = new CreateTransaction(mockTransactionRepository);

    const params: RequestTransaction = {
      type: "string",
      account_id: 101010,
      amount: 111,
    };
    const result = await createTransaction.execute(params);
    expect(result).toStrictEqual(mockData);
  });
});
