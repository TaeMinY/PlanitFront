import * as express from "express"
import { Signin,Signup,Token ,TodoCreate,DataFind,TodoDelete,PasswordFind,Check} from "./account.controller";
import * as path from 'path';
import * as multer from 'multer';
const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'upload/');
      },
      filename: function (req,file , cb) {
        cb(null, req.body.name+'.png');
		  //path.extname(file.originalname)
      }
    }),
});

router.post("/signin", Signin);
router.get("/check", Check);

router.post("/signup",Signup);
router.post("/token",Token);
router.post("/todocreate",TodoCreate)
router.post("/datafind",DataFind)
router.post("/TodoDelete",TodoDelete);
router.post("/passwordfind",PasswordFind);
router.post("/profile",upload.single('bin'),(req,res)=>{
	res.status(200).send({result:true,mes:"저장성공"}).end();
});


export default router