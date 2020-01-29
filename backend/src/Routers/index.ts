import * as express from "express"
import Account from "./account/account.router"
import Room from "./room/room.router"
const router = express.Router();
router.use("/account", Account)
router.use("/room",Room)
export default router