import * as express from "express"
import { Signin,Signup,Token } from "./account.controller";

const router = express.Router();

router.post("/signin", Signin);
router.post("/signup",Signup);
router.post("/token",Token);

export default router