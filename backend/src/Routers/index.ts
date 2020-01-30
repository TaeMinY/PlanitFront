import * as express from "express"
import Account from "./account/account.router"
const router = express.Router();
router.use("/account", Account)
export default router