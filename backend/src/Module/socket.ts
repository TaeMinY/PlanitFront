function socket(io){
    io.on('connection', socket => {
        console.log("연결")
        socket.on("SendServer",data=>{
            socket.emit("sendClient",data)
            console.log(data)
        })

    })
}
export default socket