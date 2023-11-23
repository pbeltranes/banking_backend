import  { Router, Request, Response } from "express";
import { dependencies, largeTransaction } from "./middlewares";
// import { CreateAccountUseCase } from "../../domain/application/accounts/create";
// import { CreateTransactionUseCase } from "../../domain/application/transactions/create";
const router: Router = Router();

///////////////////
// Project APIs
//////////////////

router.use(dependencies);

router.post("/accounts", (req: Request, res: Response) => {
  const createAccount = res.locals.dependencies.CreateAccount;
  const { body } = req;
  createAccount
    .execute(body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

router.use(largeTransaction);

router.post("/transaction", async (req: Request, res: Response) => {
  try {
    const { createTransaction } = res.locals.dependencies;
    const { body } = req;
    const result = await createTransaction.execute(body);
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

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
