import * as express from "express"
import Account from "./account/account.router"
import Post from "./post/post.router"

const router = express.Router();
router.use("/account", Account)
router.use("/post",Post)
export default router