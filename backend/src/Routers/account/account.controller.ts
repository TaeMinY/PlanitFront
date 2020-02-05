import * as bcrypt from "bcrypt-nodejs";
import { Request, Response } from "express";
import User from "../../Model/account";
import Send from "../../Module/Send";
import * as nodemailer from "nodemailer";
import * as path from "path";
import * as multer from "multer";
import * as jwt from "jsonwebtoken";
import * as shortid from "shortid";
const passwordRule = /^.*(?=^.{6,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
const emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
require("dotenv").config();

export const Signup = async (req: Request, res: Response) => {
  const { username, password, password2, email } = req.body;
  if (!username || !password || !password2 || !email) {
    return Send(res, 200, "빈칸을 모두 입력해 주세요.", false);
  }
  if (!emailRule.test(email)) {
    return Send(res, 200, "올바른 이메일 형식이 아닙니다.", false);
  }
  if (password != password2) {
    return Send(res, 200, "비밀번호가 일치하지 않습니다.", false);
  }
  if (!passwordRule.test(password)) {
    return Send(
      res,
      200,
      "비밀번호는 영문과 숫자를 포함하여 6~15자리로 입력해주세요.",
      false
    );
  }

  User.findOne({ email: email }, async function(err, result) {
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
            todo: [],
            memo: [],
            reminder: [],
            complete: 0,
            plane_left: 0
          }
        });
        user.save().then(data => {
          return Send(res, 200, "회원가입에 성공했습니다!", true);
        });
        // .catch(err => Send(res,200,'DB 저장을 실패했습니다.',false));
      });
    } else {
      return Send(res, 200, "이미 존재하는 계정입니다.", false);
    }
  });
};
export const Signin = (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return Send(res, 200, "빈칸을 모두 입력해 주세요.", false);
  }
  User.findOne({ email: email }, function(err, result) {
    if (err) throw err;
    if (result != null) {
      // 만약 계정이 있을 때
      bcrypt.compare(password, result.password, function(err, value) {
        if (value == true) {
          //비밀번호O
          let token = jwt.sign(
            {
              email: result.email
            },
            process.env.jwtpassword,
            {
              expiresIn: 44640
            }
          );
          console.log(token);
          Send(res, 200, "로그인에 성공하였습니다!", true, token, {
            username: result.username,
            email: result.email,
            userdata: result.userdata
          });
        } else {
          Send(res, 200, "비밀번호가 일치하지 않습니다.", false);
        }
      });
    } else {
      Send(res, 200, "아이디가 존재하지 않습니다.", false);
    }
  });
};
export const Token = (req: Request, res: Response) => {
  const { token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);
  console.log(decoded);
  User.findOne({ email: decoded.email }, function(err, result) {
    if (result) {
      Send(res, 200, "인증성공.", true, token, {
        username: result.username,
        email: result.email,
        userdata: result.userdata
      });
    } else {
      Send(res, 200, "인증실패.", false);
    }
  });
};
export const TodoCreate = (req: Request, res: Response) => {
  const { token, title, text, startDay, endDay, progress } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);
  if (!title || !text) {
    return Send(res, 200, "빈칸을 모두 입력해 주세요.", false);
  }
  const random: string = shortid.generate();

  User.findOne({ email: decoded.email }, function(err, result) {
    const R = result.userdata;
    R.todo.push({
      id: random,
      title: title,
      text: text,
      startDay: startDay,
      endDay: endDay,
      progress: progress,
      iscomplete: false
    });
    console.log("값", result.userdata, R);
    result.userdata.plane_left++;
    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          userdata: result.userdata
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "저장성공", true, token, result.userdata);
  });
};
export const TodoDelete = (req: Request, res: Response) => {
  const { token, id } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    var R = result.userdata.todo;

    var Re = R.filter(e => e.id != id);
    result.userdata.todo = Re;
    console.log("a", Re);
    console.log(result.userdata.todo);

    result.userdata.plane_left--;

    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          userdata: result.userdata
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "삭제성공", true, token, result.userdata);
  });
};
export const DataFind = (req: Request, res: Response) => {
  const { token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    Send(res, 200, "찾기성공", true, token, result.userdata);
  });
};
export const Check = (req: Request, res: Response) => {
  let decoded = jwt.verify(req.query.token, process.env.jpassword);
  if (decoded.email == req.query.email) {
    console.log("들어옴");
    res.redirect(
      301,
      "http://nulllove-rgobq.run.goorm.io/account/changepwd/" + req.query.email
    );
  }
};
export const PasswordFind = (req: Request, res: Response) => {
  const { email } = req.body;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.email, // gmail 계정 아이디를 입력
      pass: process.env.password // gmail 계정의 비밀번호를 입력
    }
  });
  let token = jwt.sign(
    {
      email: email
    },
    process.env.jpassword,
    {
      expiresIn: 44640
    }
  );
  let mailOptions: any = {
    from: "playplanit@gmail.com", // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: email, // 수신 메일 주소
    subject: "[Planit] 비밀번호 재설정 안내", // 제목
    html:
      "<p>비밀번호를 재설정 하시려면<br />아래의 링크를 클릭해주세요 !</p>" +
      "<a href='http://nulllove-rgobq.run.goorm.io/api/account/check/?email=" +
      email +
      "&token=" +
      token +
      "'>인증하기</a>"
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      Send(res, 200, "전송성공", true);
    }
  });
};
export const ChangePassword = (req: Request, res: Response) => {
  const { email, password, password2 } = req.body;
  if (!password || !password2) {
    return Send(res, 200, "빈칸을 모두 입력해 주세요.", false);
  }
  if (password != password2) {
    return Send(res, 200, "비밀번호가 일치하지 않습니다.", false);
  }
  User.findOne({ email: email }, function(err, result) {
    if (err) throw err;
    if (result != null) {
      bcrypt.hash(password, null, null, function(err, hash) {
        User.findOneAndUpdate(
          { email: result.email },
          {
            $set: {
              password: hash
            }
          },
          { new: true }
        ).exec(function(err, r) {
          console.log(r);
        });
        Send(res, 200, "정상적으로 비밀번호를 변경하였습니다", true);
      });
    } else {
      Send(res, 200, "아이디가 존재하지 않습니다.", false);
    }
  });
};

export const TodoComplete = (req: Request, res: Response) => {
  const { token, id, time } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    result.userdata.complete++;
    for (let i = 0; i < result.userdata.todo.length; i++) {
      if (result.userdata.todo[i].id == id) {
        result.userdata.todo[i].iscomplete = true;
        result.userdata.todo[i].endDay = time;
      }
    }
    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          userdata: result.userdata
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "성공", true, token, result.userdata);
  });
};

export const MemoSave = (req: Request, res: Response) => {
  const { token, memo } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    result.userdata.memo = memo;
    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          userdata: result.userdata
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "성공", true, token, result.userdata);
  });
};
export const MemoDelete = (req: Request, res: Response) => {
  const { token, memo } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    result.userdata.memo = memo;
    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          userdata: result.userdata
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "성공", true, token, result.userdata);
  });
};
export const ProfileSave = (req: Request, res: Response) => {
  const { token, username } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    result.username = username;
    User.findOneAndUpdate(
      { email: decoded.email },
      {
        $set: {
          username: result.username
        }
      },
      { new: true }
    ).exec(function(err, r) {
      console.log(r);
    });

    Send(res, 200, "닉네임을 변경하셨습니다", true, token, result.userdata);
  });
};
export const End = (req: Request, res: Response) => {
  const { token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);
  User.deleteOne({ email: decoded.email }, function(err) {});
  Send(res, 200, "회원탈퇴 성공", true);
};
