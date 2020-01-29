import * as express from "express"
import { Signin,Signup } from "./account.controller";

const router = express.Router();

router.post("/signin", Signin);
router.post("/signup",Signup);

export default router