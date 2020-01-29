import * as bcrypt from "bcrypt-nodejs"
import { Request, Response } from "express";
import User from '../../Model/account';
import Send from '../../Module/Send';
export const Signup = (req: Request, res: Response) => {
    const {
        id,
        password,
        nickname,
        email,
    } = req.body;
    User.findOne({id: id}, function(err,result){
        if(err) throw err;
        if(!(id||password||nickname||email)){
            Send(res,200,'입력창을 모두 입력해주세요',false)
        }
        if(result == null){//생성
            bcrypt.hash(password, null, null, function(err, hash){
                const user: any = new User({
                    id : id,
                    password: hash,
                    nickname : nickname,
                    email : email,
                    userdata : { test : "test" } //나중에 기획이 나오면 설정 할 부분
                });
                user.save()
		            .then((data) => {
                       Send(res,200,'회원가입 성공.',true)
		        	})
		           .catch(err => Send(res,200,'DB 저장을 실패했습니다.',false));
            });
        }else{
            Send(res,200,'아이디 중복',false)
        }
    })
}
export const Signin = (req: Request, res: Response) => {
    const {
        id,
        password,
    } = req.body;
    if(!(id||password)){
        Send(res,200,'입력창을 모두 입력해주세요',false)
    }
    User.findOne({id: id}, function(err,result){
        if(err) throw err;
        if(result != null){// 만약 계정이 있을 때
            bcrypt.compare(password, result.password, function(err, value) {
                if(value == true){ //비밀번호O
                    Send(res,200,'로그인 성공.',true,result.nickname,result.userdata)
                }else{
                    Send(res,200,'비밀번호 불일치',false)
                }
            });
        }else{
          Send(res,200,'아이디가 없습니다',false)
        }
    });
}