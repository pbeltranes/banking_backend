import { Router, Request, Response } from "express";
import { dependencies, largeTransaction } from "./middlewares";
// import { CreateAccountUseCase } from "../../domain/application/accounts/create";
// import { CreateTransactionUseCase } from "../../domain/application/transactions/create";
import routerAccount from "./account";
import routerTransaction from "./transaction";
const router: Router = Router();
///////////////////
// Project APIs
//////////////////

// const dependencies = async (req, res, next) => {
//   const { Account, Transaction } = await getMongoDS();
//   const accountRepo = new AccountRepositoryImp(Account);
//   const transactionRepo = new TransactiontRepositoryImp(Transaction);
//   res.locals.dependencies = {
//     createAccount: new CreateAccount(accountRepo),
//     createTransaction: new CreateTransaction(transactionRepo),
//   };

//   next();
// };

// router.use(dependencies);
router.use("/accounts", dependencies, routerAccount);

// router.use(largeTransaction);

router.use("/transaction", dependencies, routerTransaction);

// TODO: autenticar comunicacion
// ------ Add JWT to chosen routes
// import jwt    from 'express-jwt'
// import config from '../configs/config'
// const JwtCheck = jwt({ secret: config.jwt.key })
// router.use('/v1/samples', JwtCheck, sampleRouter)

// TODO: documentar con swagger
// import swaggerUi  from 'swagger-ui-express'
// import * as specs from '../services/swagger'
// router.use('/docs', swaggerUi.serve)
// router.get('/docs', swaggerUi.setup(specs, { explorer: true }))

export default router;
