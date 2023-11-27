import { NextFunction, Request, Response } from "express";
import { getMongoDS } from "../../database/mongodb";
import { AccountRepositoryImp } from "../../repositories/account-repository";
import { TransactiontRepositoryImp } from "../../repositories/transaction-repository";

import { CreateAccount } from "../../../application/accounts/create";
import { FindOneAccount } from "../../../application/accounts/find-one";
import { CreateTransaction } from "../../../application/transactions/create";

const dependencies = async (req: Request, res: Response, next: NextFunction) => {
  const { Account, Transaction } = await getMongoDS();
  const accountRepo = new AccountRepositoryImp(Account);
  const transactionRepo = new TransactiontRepositoryImp(Transaction);
  
  res.locals.dependencies = {
    createAccount: new CreateAccount(accountRepo),
    createTransaction: new CreateTransaction(transactionRepo),
    findOneAccount: new FindOneAccount(accountRepo),
  };
  next();
};
export default dependencies;
