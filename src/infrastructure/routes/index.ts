import { Router } from "express";
import { dependencies } from "./middlewares";
import routerAccount from "./account";
import routerTransaction from "./transaction";
const router: Router = Router();

// router.use(dependencies);
router.use("/accounts", dependencies, routerAccount);

// router.use(largeTransaction);

router.use("/transaction", dependencies, routerTransaction);



// TODO: documentar con swagger
// import swaggerUi  from 'swagger-ui-express'
// import * as specs from '../services/swagger'
// router.use('/docs', swaggerUi.serve)
// router.get('/docs', swaggerUi.setup(specs, { explorer: true }))

export default router;
