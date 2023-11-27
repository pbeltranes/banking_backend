import { LARGE_AMOUNT } from "../../../configs/constants";

const largeTransaction = async (req, res, next) => {
  if (req.body.amount > LARGE_AMOUNT) {
    console.log("large transaction: " + req.body.amount);
  }
  next()
};

export default largeTransaction;
