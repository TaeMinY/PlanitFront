import * as express from "express"
import  { PostCreate,PostFind,FindMyPost,CommentCreate,CommentFind,CommentFindAll,PostLike} from "./post.controller";
const router = express.Router();


router.post("/postcreate", PostCreate);
router.post("/postfind", PostFind);
router.post("/findmypost",FindMyPost)
router.post("/commentcreate",CommentCreate)
router.post("/commentfind",CommentFind)
router.post("/commentfindall",CommentFindAll)
router.post("/postlike",PostLike)
export default router


