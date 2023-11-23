/**
 * FILEPATH: /Users/paul/Proyectos/labeling/video-label-api/__test__/routes/label.test.ts
 * This file contains unit tests for the label detection API endpoints.
 */

import request from "supertest";
import { Request, Response, NextFunction } from "express";
import App from "../../../src/infrastructure/routes/transaction";
import {
  RequestAccounts,
  ResponseAccounts,
} from "../../../src/domain/entities/accounts";
import {
  RequestTransaction,
  ResponseTransaction,
} from "../../../src/domain/entities/transactions";
import { CreateAccountUseCase } from "../../../src/domain/application/accounts/create";
import { CreateTransactionUseCase } from "../../../src/domain/application/transactions/create";
import server from "../../../src/app";
/**
 * A mock implementation of the StartLabelDetectionUseCase interface.
 */
class MockCreateAccountUseCase implements CreateAccountUseCase {
  execute(RequestAccounts): Promise<ResponseAccounts> {
    throw new Error("Method not implemented.");
  }
}

/**
 * A mock implementation of the GetLabelDetectionUseCase interface.
 */
class MockCreateTransactionUseCase implements CreateTransactionUseCase {
  execute(RequestTransaction): Promise<ResponseTransaction> {
    throw new Error("Method not implemented.");
  }
}

describe("/", () => {
  let mockCreateAccount: MockCreateAccountUseCase;
  let mockCreateTransaction: MockCreateTransactionUseCase;
  const mockNext = jest.fn();
  beforeAll(() => {
    mockCreateAccount = new MockCreateAccountUseCase();
    mockCreateTransaction = new MockCreateTransactionUseCase();
    server.use((req: Request, res: Response, next: NextFunction) => {
      res.locals.dependencies = {
        createAccount: mockCreateAccount,
        createTransaction: mockCreateTransaction,
      };
      next();
    });
    server.use("/", App);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST Transaction", () => {
    const mockData: ResponseTransaction = {
      id: 1010101,
    };
    const body: RequestTransaction = {
        account_id: 1,
        amount: 100,
        type: "1100",
        };

    it("should return 200 with data", async () => {
      jest
        .spyOn(mockCreateTransaction, "execute")
        .mockImplementation(() => Promise.resolve(mockData));

      const response = await request(server).post("/transaction").send(body);
      expect(response.body).toEqual(mockData);
      expect(response.status).toBe(200);
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

  describe("POST Account", () => {
    // it("should return 200 with data", async () => {
    //   const mockData: GetLabelDetectionResponse = {
    //     JobStatus: "SUCCEEDED",
    //     Labels: [
    //       {
    //         Timestamp: 0,
    //         Label: {
    //           Name: "string",
    //           Confidence: 0,
    //           Instances: [
    //             {
    //               Confidence: 0,
    //               BoundingBox: {
    //                 Width: 0,
    //                 Height: 0,
    //                 Left: 0,
    //                 Top: 0,
    //               },
    //             },
    //           ],
    //           Parents: [
    //             {
    //               Name: "string",
    //             },
    //           ],
    //         },
    //       },
    //     ],
    //     VideoMetadata: {
    //       Codec: "string",
    //       DurationMillis: 0,
    //       Format: "string",
    //       FrameRate: 0,
    //       FrameHeight: 0,
    //       FrameWidth: 0,
    //     },
    //   };

    //   jest
    //     .spyOn(mockGetLabel, "execute")
    //     .mockImplementation(() => Promise.resolve(mockData));

    //   const response = await request(server).get("/v2/label/1");
    //   expect(response.body).toEqual(mockData);
    //   expect(response.status).toBe(200);
    // });
    // it("should return 200 without data", async () => {
    //   jest
    //     .spyOn(mockGetLabel, "execute")
    //     .mockImplementation(() =>
    //       Promise.reject(new Error("Method not implemented."))
    //     );

    //   const response = await request(server).get("/v2/label/1");
    //   expect(response.body).toEqual({});
    //   expect(response.status).toBe(200);
    // });
  });
});
