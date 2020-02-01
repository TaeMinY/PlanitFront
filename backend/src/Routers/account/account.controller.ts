import * as bcrypt from 'bcrypt-nodejs';
import {Request, Response} from 'express';
import User from '../../Model/account';
import Send from '../../Module/Send';
import * as path from 'path';
import * as multer from 'multer';
import * as jwt from 'jsonwebtoken';
import * as shortid from 'shortid';
const jwtpassword = 'oiwjoiefinsajd@%&SD@23Tsa&*saf';
const passwordRule = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const Signup = async (req: Request, res: Response) => {
  const {username, password, password2, email} = req.body;
  if (!username || !password || !password2 || !email) {
    return Send(res, 200, '빈칸을 모두 입력해 주세요.', false);
  }
  if (!emailRule.test(email)) {
    return Send(res, 200, '올바른 이메일 형식이 아닙니다.', false);
  }
  if (password != password2) {
    return Send(res, 200, '비밀번호가 일치하지 않습니다.', false);
  }
  if (!passwordRule.test(password)) {
    return Send(
      res,
      200,
      '비밀번호는 영문과 숫자를 포함하여 6~15자리로 입력해주세요.',
      false,
    );
  }

  User.findOne({email: email}, async function(err, result) {
    if (err) throw err;
    if (result == null) {
      //생성
      bcrypt.hash(password, null, null, function(err, hash) {
        const user: any = new User({
          email: email,
          password: hash,
          username: username,
          profile_image: "test",
		  userdata: {
			  todo:[],
			  memo:[],
			  reminder:[]
		  }
        });
        user.save().then(data => {
          return Send(res, 200, '회원가입에 성공했습니다!', true);
        });
        // .catch(err => Send(res,200,'DB 저장을 실패했습니다.',false));
      });
    } else {
      return Send(res, 200, '이미 존재하는 계정입니다.', false);
    }
  });
};
export const Signin = (req: Request, res: Response) => {
  const {email, password} = req.body;
  if (!email || !password) {
    return Send(res, 200, '빈칸을 모두 입력해 주세요.', false);
  }
  User.findOne({email: email}, function(err, result) {
    if (err) throw err;
    if (result != null) {
      // 만약 계정이 있을 때
      bcrypt.compare(password, result.password, function(err, value) {
        if (value == true) {
          //비밀번호O
          let token = jwt.sign(
            {
              email: result.email,
            },
            jwtpassword,
            {
              expiresIn: 44640,
            },
          );
          console.log(token);
          Send(res, 200, '로그인에 성공하였습니다!', true, token, {
            username: result.username,
            email: result.email,
            profile_image: result.profile_image,
			userdata : result.userdata
          });
        } else {
          Send(res, 200, '비밀번호가 일치하지 않습니다.', false);
        }
      });
    } else {
      Send(res, 200, '아이디가 존재하지 않습니다.', false);
    }
  });
};
export const Token = (req: Request, res: Response) => {
  const {token} = req.body;
  let decoded = jwt.verify(token, jwtpassword);
  console.log(decoded);
  User.findOne({email: decoded.email}, function(err, result) {
    if (result) {
      Send(res, 200, '인증성공.', true);
    } else {
      Send(res, 200, '인증실패.', false);
    }
  });
};
export const TodoCreate = (req:Request,res:Response)=>{
	const {token,title,text,startDay,endDay,progress} = req.body;
	  let decoded = jwt.verify(token, jwtpassword);
	if (!title || !text) {
    return Send(res, 200, '빈칸을 모두 입력해 주세요.', false);
  }
		const random: string = shortid.generate();

	User.findOne({email:decoded.email},function(err,result){
		const R = result.userdata;
		R.todo.push({id:random,title:title,text:text,startDay:startDay,endDay:endDay,progress:progress})
			console.log("값",result.userdata,R)
		
		User.findOneAndUpdate({email: decoded.email},{$set : {
			userdata : result.userdata,
		}},{new : true})
		.exec(function (err, r) {
			console.log(r)
		})
	
		Send(res,200,'저장성공',true,token,result.userdata);
	})
	

}
export const TodoDelete = (req:Request,res:Response)=>{
	const {token,id} = req.body;
	  let decoded = jwt.verify(token, jwtpassword);

	
	User.findOne({email:decoded.email},function(err,result){
		var R = result.userdata.todo;
		var Re = R.filter(e=>e.id != id);
		result.userdata.todo = Re;
		console.log("a",Re);
		console.log(result.userdata.todo)
		
		User.findOneAndUpdate({email: decoded.email},{$set : {
			userdata : result.userdata
		}},{new : true})
		.exec(function (err, r) {
			console.log(r)
		})
		
		Send(res,200,'삭제성공',true,token,result.userdata);

	})
	

}

			

export const DataFind = (req:Request,res:Response)=>{
	const {token} = req.body;
	  let decoded = jwt.verify(token, jwtpassword);

	User.findOne({email:decoded.email},function(err,result){
		Send(res,200,'찾기성공',true,token,result.userdata);
	})
}
