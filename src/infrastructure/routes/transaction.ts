import { Router, Request, Response } from "express";
import { largeTransaction } from "./middlewares";
const router: Router = Router();

///////////////////////////
// TRANSACTION
/////////////////////////

// TODO: AGREGAR JOI
router.post("/", largeTransaction, async (req: Request, res: Response) => {
  try {

    const { body } = req;
    const { createTransaction } = res.locals.dependencies;
    const result = await createTransaction.execute(body);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
});

// TODO: documentar con swagger
// import swaggerUi  from 'swagger-ui-express'
// import * as specs from '../services/swagger'
// router.use('/docs', swaggerUi.serve)
// router.get('/docs', swaggerUi.setup(specs, { explorer: true }))

export default router;
