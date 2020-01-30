import * as bcrypt from "bcrypt-nodejs"
import { Request, Response } from "express";
import User from '../../Model/account';
import Send from '../../Module/Send';
import * as jwt from "jsonwebtoken"
const jwtpassword = "oiwjoiefinsajd@%&SD@23Tsa&*saf"
const passwordRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
export const Signup = async (req: Request, res: Response) => {
    const {
		username,
		profile_image,
        password,
		password2,
        email,
    } = req.body;
	
	if(password != password2){
		return Send(res,200,"비밀번호가 일치하지 않습니다",false);
	}
	if(!passwordRule.test(password)) {
		return Send(res,200,"비밀번호는 특수문자, 문자, 숫자 포함 형태의 8~15자리 이내로 작성해주세요",false);
	}
	if(!emailRule.test(email)) {
		return Send(res,200,"이메일 형식으로 작성해주세요",false);
	}
	
    User.findOne({email: email},async function(err,result){
        if(err) throw err;
        if(!(username||password||email)){
             return Send(res,200,'입력창을 모두 입력해주세요',false)
        }
        if(result == null){//생성
            bcrypt.hash(password, null, null, function(err, hash){
				console.log("toddddd")
                const user: any = new User({
                    email : email,
                    password: hash,
                 	username : username,
					profile_image : profile_image,
                });
                user.save()
		            .then((data) => {
                       return Send(res,200,'회원가입 성공.',true)
		        	})
		           .catch(err => Send(res,200,'DB 저장을 실패했습니다.',false));
            });
        }else{
            return Send(res,200,'이메일 중복',false)
        }
    })
}
export const Signin = (req: Request, res: Response) => {
    const {
        email,
        password,
    } = req.body;
    if(!(email||password)){
        return Send(res,200,'입력창을 모두 입력해주세요',false)
    }
    User.findOne({email: email}, function(err,result){
        if(err) throw err;
        if(result != null){// 만약 계정이 있을 때
            bcrypt.compare(password, result.password, function(err, value) {
                if(value == true){ //비밀번호O
					  let token = jwt.sign({
        				email: result.email   
      				  },
      				  	jwtpassword ,    
      				  )
					    let decoded = jwt.verify(token, jwtpassword);
						console.log(decoded);	
                    Send(res,200,'로그인 성공.',true,token)
                }else{
                    Send(res,200,'비밀번호 불일치',false)
                }
            });
        }else{
          Send(res,200,'아이디가 없습니다',false)
        }
    });
}