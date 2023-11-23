import { LARGE_AMOUNT } from "../../../configs/constants";

const largeTransaction = async (req, res, next) => {
  if (req.body.amount > LARGE_AMOUNT) {
    res.status(400).json({ message: "Transaction amount is too large" });
  }
};

export default largeTransaction;
