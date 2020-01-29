import * as express from "express"
import { Create,Join } from "./room.controller";

const router = express.Router();

router.post("/create",Create);
router.post("/join", Join);

export default router