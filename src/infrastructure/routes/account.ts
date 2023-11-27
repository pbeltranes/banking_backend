import { Router, Request, Response } from "express";
import { generateUniqueId } from "../../configs/utils";
const router: Router = Router();

///////////////////////////
// ACCOUNTS
/////////////////////////

// TODO: AGREGAR JOI
// TODO: AGREGAR CASO DE USO
router.post("/", async (req: Request, res: Response) => {
  try {
    const { createAccount, findOneAccount } = res.locals.dependencies;
    const { name, initial_balance, account_number } = req.body;
    const response = await findOneAccount.execute({ account_number });
    console.log(response);
    if (response) {
      return res
        .status(200)
        .json({ account_id: response.account_id, initial_balance });
    }
    const account_id = generateUniqueId(Number(account_number));
    await createAccount.execute({
      name,
      initial_balance: Number(initial_balance),
      account_number: Number(account_number),
      account_id,
    });
    return res.status(201).json({ account_id, initial_balance });
  } catch (err) {
    console.log(err);
    return res.status(404).json(err);
  }
});

export default router;
