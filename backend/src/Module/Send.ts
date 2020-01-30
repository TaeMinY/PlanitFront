function Send(res, status:Number, mes?:string, result?: boolean ,token?: string,userdata?:object) {
    res.status(status).send({result,mes,token,userdata}).end();
}
export default Send;