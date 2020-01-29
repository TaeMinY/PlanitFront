import * as shortid from 'shortid';
import { Request, Response } from "express";
import Send from '../../Module/Send';
import roomDB from '../../Module/roomDB';
export const Create = (req: Request, res: Response) => {
    const {
        roomname,
        nickname,
        userdata,
        password,
        personnel,
    } = req.body;
    //이 사이에는 방 인원수 제한등등을 구현
    roomDB.push({
        _id : shortid.generate(),
        roomname,
        personnel,
        passwordLock : (password)? true: false,
        password,
        progress : false,
        player:[
            {
                nickname,
                master : true,
                userdata
            }
        ]
    });
    Send(res,200,'방 생성 완료',true)
}
export const Join = (req: Request, res: Response) => {
    const {
        _id,
        password,
        nickname,
        userdata
    } = req.body;
    const join = roomDB.join({
        _id,
        password,
        nickname,
        userdata
    })
    Send(res,200,join,(join== "성공적으로 방에 입장하셨습니다")? true : false)
}