/**
 * FILEPATH: /Users/paul/Proyectos/labeling/video-label-api/__test__/routes/label.test.ts
 * This file contains unit tests for the label detection API endpoints.
 */

import request from "supertest";
import { Request, Response, NextFunction } from "express";
import App from "../../../src/infrastructure/routes/account";
import {
  RequestAccounts,
  ResponseAccounts,
  RequestFindAccount,
  ResponseAccountsRepository,
  ResponseFindAccount,
} from "../../../src/domain/entities/accounts";
import { CreateAccountUseCase } from "../../../src/domain/application/accounts/create";
import server from "../../../src/app";
import { generateUniqueId } from "../../../src/configs/utils";
import { FindOneAccountUseCase } from "../../../src/domain/application/accounts/find-one";
import { mock } from "node:test";
/**
 * A mock implementation of the StartLabelDetectionUseCase interface.
 */
class MockCreateAccountUseCase implements CreateAccountUseCase {
  execute(RequestAccounts): Promise<ResponseAccounts> {
    throw new Error("Method not implemented.");
  }
}

class MockFindOneAccountUseCase implements FindOneAccountUseCase {
  execute(params: RequestFindAccount): Promise<ResponseFindAccount> {
    throw new Error("Method not implemented.");
  }
}
describe("/", () => {
  let mockCreateAccount: MockCreateAccountUseCase;
  let mockFindOneAccount: MockFindOneAccountUseCase;
  beforeAll(() => {
    mockCreateAccount = new MockCreateAccountUseCase();
    mockFindOneAccount = new MockFindOneAccountUseCase();
    server.use((req: Request, res: Response, next: NextFunction) => {
      res.locals.dependencies = {
        createAccount: mockCreateAccount,
        findOneAccount: mockFindOneAccount,
      };
      next();
    });
    server.use("/", App);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("POST Accounts", () => {
    const mockData: ResponseAccounts = {
      id: 11213123312132,
    };
    const body: RequestAccounts = {
      name: "nombre",
      account_number: 1111111111111111,
      initial_balance: 1100,
      account_id: generateUniqueId(1111111111111111),
    };
    const responseFindAccount: ResponseFindAccount = {
      name: "nombre",
      account_number: 1111111111111111,
      initial_balance: 1100,
      account_id: generateUniqueId(1111111111111111),
    };
    it("should return 200 with data", async () => {
      jest
        .spyOn(mockCreateAccount, "execute")
        .mockImplementation(() => Promise.resolve(mockData));
      jest
        .spyOn(mockFindOneAccount, "execute")
        .mockImplementation(() => Promise.resolve(responseFindAccount));

      const response = await request(server).post("/").send(body);

      expect(response.body.initial_balance).toEqual(body.initial_balance);
      expect(response.status).toBe(200);
    });

    it("should return 201", async () => {
      jest
        .spyOn(mockCreateAccount, "execute")
        .mockImplementation(() => Promise.resolve(mockData));
      jest
        .spyOn(mockFindOneAccount, "execute")
        .mockImplementation(() => Promise.resolve(null));

      const response = await request(server).post("/").send({});
      expect(response.status).toBe(201);
    });

    it("should return 404", async () => {
      jest
        .spyOn(mockCreateAccount, "execute")
        .mockImplementation(() => Promise.reject({ message: "error" }));
      jest
        .spyOn(mockFindOneAccount, "execute")
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
