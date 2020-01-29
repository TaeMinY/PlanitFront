import roomDB from './roomDB';
function socket(io){
    io.on('connection', socket => {
        console.log("연결")
        socket.on("SendServer",data=>{
            socket.emit("sendClient",data)
            console.log(data)
        })
        socket.on("Join",data=>{
            socket.join(data._id);
            const room = roomDB.searchAll().filter(value=>{
                value._id == data._id
            })
            io.sockets.in(data._id).emit("RoomLoad",room);
            //메인로드를 추가해야됨
            var MainLoad = [];
            roomDB.searchAll().forEach((data, index) => {
                MainLoad[index] = {
                    _id : data._id,
                    roomname: data.roomname,
                    personnel: data.personnel,
                    connectedUsers: data.player.length,
                    passwordLock: data.passwordLock,
                    progress : data.progress
                };
            });
            socket.emit("sendMainRoom",MainLoad)     
        })
        socket.on("MainLoad",data=>{
            console.log(data);
            var MainLoad = [];
            roomDB.searchAll().forEach((data, index) => {
                MainLoad[index] = {
                    _id : data._id,
                    roomname: data.roomname,
                    personnel: data.personnel,
                    connectedUsers: data.player.length,
                    passwordLock: data.passwordLock,
                    progress : data.progress
                };
            });
            socket.emit("sendMainRoom",MainLoad)     
        })
        

    })
}
export default socket