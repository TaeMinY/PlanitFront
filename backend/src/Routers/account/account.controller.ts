import * as bcrypt from "bcrypt-nodejs"
import { Request, Response } from "express";
import User from '../../Model/account';
import Send from '../../Module/Send';
import * as jwt from "jsonwebtoken"
const jwtpassword = "oiwjoiefinsajd@%&SD@23Tsa&*saf"
const passwordRule = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const Signup = async (req: Request, res: Response) => {
    const {
		username,
		profile_image,
        password,
		password2,
        email,
    } = req.body;
	console.log(!username||!password||!password2||!email);
	if(!username||!password||!password2||!email){
             return Send(res,200,'빈칸을 모두 입력해 주세요.',false)
    }
	if(!emailRule.test(email)) {
		return Send(res,200,"올바른 이메일 형식이 아닙니다.",false);
	}
	if(password != password2){
		return Send(res,200,"비밀번호가 일치하지 않습니다.",false);
	}
	if(!passwordRule.test(password)) {
		return Send(res,200,"비밀번호는 영문과 숫자를 포함하여 6~15자리로 입력해주세요.",false);
	}
	
    User.findOne({email: email},async function(err,result){
        if(err) throw err;
       
        if(result == null){//생성
            bcrypt.hash(password, null, null, function(err, hash){
                const user: any = new User({
                    email : email,
                    password: hash,
                 	username : username,
					profile_image : profile_image,
                });
                user.save()
		            .then((data) => {
                       return Send(res,200,'회원가입에 성공했습니다!',true)
		        	})
		           // .catch(err => Send(res,200,'DB 저장을 실패했습니다.',false));
            });
        }else{
            return Send(res,200,'이미 존재하는 계정입니다.',false)
        }
    })
}
export const Signin = (req: Request, res: Response) => {
    const {
        email,
        password,
    } = req.body;
    if(!email||!password){
        return Send(res,200,'빈칸을 모두 입력해 주세요.',false)
    }
    User.findOne({email: email}, function(err,result){
        if(err) throw err;
        if(result != null){// 만약 계정이 있을 때
            bcrypt.compare(password, result.password, function(err, value) {
                if(value == true){ //비밀번호O
					  let token = jwt.sign({
        				email: result.email   
      				  },
      				  	jwtpassword , {
      						expiresIn: 44640,
    					})   
					  console.log(token)
                    Send(res,200,'로그인에 성공하였습니다!',true,token,{username:result.username,email:result.email,profile_image:result.profile_image})
                }else{
                    Send(res,200,'비밀번호가 일치하지 않습니다.',false)
                }
            });
        }else{
          Send(res,200,'아이디가 존재하지 않습니다.',false)
        }
    });
}
export const Token = (req:Request,res:Response)=>{
	const {
        token
    } = req.body;
	let decoded = jwt.verify(token, jwtpassword);
	console.log(decoded)
	User.findOne({email: decoded.email}, function(err,result){
		if(result){
			 Send(res,200,'인증성공.',true);
		}else{
			Send(res,200,'인증실패.',false);
		}
    });
}