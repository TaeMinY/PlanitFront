function Send(res, status:Number, mes?:string, result?: boolean ,token?: string) {
    res.status(status).send({result,mes,token}).end();
}
export default Send;