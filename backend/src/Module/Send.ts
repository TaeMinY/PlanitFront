function Send(res, status:Number, mes?:string, result?: boolean ,nickname?:string,userdata?:any) {
    res.status(status).send({result,mes,nickname,userdata}).end();
}
export default Send;