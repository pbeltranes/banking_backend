import { CreateAccount } from "../../../application/accounts/create";
import { CreateTransaction } from "../../../application/transactions/create";
import { getMongoDS } from "../../database/mongodb";
import { AccountRepositoryImp } from "../../repositories/account-repository";
import { TransactiontRepositoryImp } from "../../repositories/transaction-repository";

const dependencies = async (req, res, next) => {
  const { Account, Transaction } = await getMongoDS();
  const accountRepo = new AccountRepositoryImp(Account);
  const transactionRepo = new TransactiontRepositoryImp(Transaction);
  res.locals.dependencies = {
    createAccount: new CreateAccount(accountRepo),
    createTransaction: new CreateTransaction(transactionRepo),
  };

  next();
};
export default dependencies;
