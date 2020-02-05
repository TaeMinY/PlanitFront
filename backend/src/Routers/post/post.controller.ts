import { Request, Response } from "express";
import User from "../../Model/account";
import Comment from "../../Model/comment";
import Post from "../../Model/post";

import Send from "../../Module/Send";
import * as jwt from "jsonwebtoken";
import * as shortid from "shortid";

require("dotenv").config();

export const PostCreate = (req: Request, res: Response) => {
  const { token, data, text, time } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    const post: any = new Post({
      email: decoded.email,
      data: data,
      text: text,
      like: 0,
      like_users: [],
      time: time,
      name: result.username
    });
    post.save().then(data => {
      return Send(res, 200, "포스트에 저장을 성공하셨습니다!", true);
    });
  });
};
export const PostFind = (req: Request, res: Response) => {
  Post.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    var r = result.reverse();
    return Send(res, 200, "성공", true, req.body.token, r);
  });
};
export const FindMyPost = (req: Request, res: Response) => {
  const { token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  Post.find({ email: decoded.email }, function(err, result) {
    if (err) {
      console.log(err);
    }
    return Send(res, 200, "성공", true, req.body.token, result);
  });
};
export const CommentCreate = (req: Request, res: Response) => {
  const { token, text, time, _id } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  User.findOne({ email: decoded.email }, function(err, result) {
    const comment: any = new Comment({
      email: decoded.email,
      time: time,
      text: text,
      post_id: _id,
      name: result.username
    });
    comment.save().then(data => {
      return Send(res, 200, "포스트에 저장을 성공하셨습니다!", true);
    });
  });
};
export const CommentFind = (req: Request, res: Response) => {
  const { token, _id } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  Comment.find({ post_id: _id }, function(err, result) {
    if (err) {
      console.log(err);
    }
    var r = result.reverse();
    return Send(res, 200, "성공", true, req.body.token, r);
  });
};
export const CommentFindAll = (req: Request, res: Response) => {
  Comment.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    var r = result.reverse();

    return Send(res, 200, "성공", true, req.body.token, r);
  });
};
export const PostLike = (req: Request, res: Response) => {
  const { token, _id } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);
  Post.findOne({ _id: _id }, function(err, result) {
    var k = result.like_users;
    var Down = result.like - 1;
    var Up = result.like + 1;
    if (err) {
      console.log(err);
    }
    var stat = false;
    k.forEach(e => {
      if (e == decoded.email) {
        stat = true;
      }
    });
    if (stat) {
      var unlikeUser = [];
      k.forEach(value => {
        if (decoded.email != value) {
          unlikeUser.push(value);
        }
      });
      Post.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            like_users: unlikeUser,
            like: Down
          }
        },
        { new: true }
      ).exec(function(err, r) {
        console.log(r);
      });
      return Send(res, 200, "성공", true);
    } else {
      var likeUser = k;
      likeUser.push(decoded.email);
      Post.findOneAndUpdate(
        { _id: _id },
        {
          $set: {
            like_users: likeUser,
            like: Up
          }
        },
        { new: true }
      ).exec(function(err, r) {
        console.log(r);
      });
      return Send(res, 200, "성공", true);
    }
  });
};
export const DeleteComment = (req: Request, res: Response) => {
  const { _id, token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  Comment.deleteOne({ _id: _id }, function(err) {});
  return Send(res, 200, "성공", true);
};

export const PostDelete = (req: Request, res: Response) => {
  const { _id, token } = req.body;
  let decoded = jwt.verify(token, process.env.jwtpassword);

  Post.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    Post.deleteOne({ _id: _id }, function(err) {});
  });
  Post.find({ email: decoded.email }, function(err, result) {
    if (err) {
      console.log(err);
    }
    var r = result.reverse();
    return Send(res, 200, "성공", true, req.body.token, r);
  });
};
