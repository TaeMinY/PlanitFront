import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync'
import * as fs from 'fs'
fs.unlink('Room.json',function(err){
	if( err ) throw err;
	console.log('방 초기화');
});
const adapter = new FileSync('Room.json')
const Roomdb = lowdb(adapter)
function searchAll(){
    return Roomdb.get('RoomData').value();
}
function setting(){
    Roomdb.defaults({RoomData:[]}).write();
}
function push(data){
    Roomdb.get('RoomData').push(data).write();
}
function join(data){
    const Room = Roomdb.get('RoomData').find({ _id: data._id }).value()
    console.log(Room)
    if(!Room){
        return "해당 방이 없습니다"
    }
    console.log(Room.password,data.password)
    if(Room.password != data.password){
        return "비밀번호가 틀립니다"
    }
    const player = Room.player;
    player.push({
        nickname: data.nickname,
        master : false,
        userdata : data.userdata
    })
    Roomdb.get('RoomData').find({ _id: data._id }).assign({ player: player }).write()
    return "성공적으로 방에 입장하셨습니다"
}
function remove(){
    console.log("b");
}
export default {setting,push,remove,join,searchAll}