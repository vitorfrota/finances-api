import { Router } from "https://deno.land/x/oak/mod.ts";

import * as TransactionController from "../controllers/TransactionController.ts";

const router = new Router();

router.get('/transactions', TransactionController.getTransactions);
router.post('/transactions', TransactionController.addTransaction);
router.delete('/transactions/:id', TransactionController.deleteTransaction);


export default router;