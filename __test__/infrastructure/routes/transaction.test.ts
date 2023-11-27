/**
 * FILEPATH: /Users/paul/Proyectos/labeling/video-label-api/__test__/routes/label.test.ts
 * This file contains unit tests for the label detection API endpoints.
 */

import request from "supertest";
import { Request, Response, NextFunction } from "express";
import App from "../../../src/infrastructure/routes/transaction";
import {
  RequestTransaction,
  ResponseTransaction,
} from "../../../src/domain/entities/transactions";
import { CreateTransactionUseCase } from "../../../src/domain/application/transactions/create";
import server from "../../../src/app";
/**
 * A mock implementation of the StartLabelDetectionUseCase interface.
 */
// class MockCreateAccountUseCase implements CreateAccountUseCase {
//   execute(RequestAccounts): Promise<ResponseAccounts> {
//     throw new Error("Method not implemented.");
//   }
// }

/**
 * A mock implementation of the GetLabelDetectionUseCase interface.
 */
class MockCreateTransactionUseCase implements CreateTransactionUseCase {
  execute(RequestTransaction): Promise<ResponseTransaction> {
    throw new Error("Method not implemented.");
  }
}

describe("/", () => {
  // let mockCreateAccount: MockCreateAccountUseCase;
  let mockCreateTransaction: MockCreateTransactionUseCase;
  const mockNext = jest.fn();
  beforeAll(() => {
    // mockCreateAccount = new MockCreateAccountUseCase();
    mockCreateTransaction = new MockCreateTransactionUseCase();
    server.use((req: Request, res: Response, next: NextFunction) => {
      res.locals.dependencies = {
        // createAccount: mockCreateAccount,
        createTransaction: mockCreateTransaction,
      };
      next();
    });
    server.use("/", App);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST transaction", () => {
    const mockData: ResponseTransaction = {
      id: 1010101,
    };
    const body: RequestTransaction = {
      account_id: 1,
      amount: 12000,
      type: "1100",
    };

    it("should return 200 with data", async () => {
      jest
        .spyOn(mockCreateTransaction, "execute")
        .mockImplementation(() => Promise.resolve(mockData));

      const response = await request(server).post("/").send(body);

      expect(response.body).toEqual(mockData);
      expect(response.status).toBe(201);
    });

    it("should return 404", async () => {
      jest
        .spyOn(mockCreateTransaction, "execute")
        .mockImplementation(() => Promise.reject({ message: "error" }));

      const response = await request(server).post("/").send({});
      expect(response.body).toEqual({ message: "error" });
      expect(response.status).toBe(404);
    });
    // it("should return 400 without params required", async () => {
    //   jest
    //     .spyOn(mockStartLabel, "execute")
    //     .mockImplementation(() =>
    //       Promise.reject(new Error("Method not implemented."))
    //     );
    //   const response = await request(server).post("/v2/label");
    //   if (response.error) {
    //     expect(response.error.text).toEqual("Missing required fields");
    //   }
    //   expect(response.body).toEqual({});
    //   expect(response.status).toBe(400);
    // });
  });


});
