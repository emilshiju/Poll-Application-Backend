import { setMessage, whoUser } from "./messageManagement.js";
import { votePoll } from "./pollManagement.js";





const socketConfig=(io)=>{

    let connectedClients={};
    console.log("hiuh")

    io.on('connection',(socket)=>{

        console.log("siuhfioh")


        socket.on('on',(userId)=>{
            if(!connectedClients[userId]){
            connectedClients[userId]=socket.id
            }
            console.log(connectedClients)
        })


        socket.on('userVote',async(id)=>{
           const {voteId,pollId,userId}=id
console.log("ividee")
        
         
         console.log(voteId,pollId,userId)
         let res=  await  votePoll(voteId,pollId,userId)
         if(res){
            console.log("pouiiiiiiiiiii 0000000000000000000000")
         io.emit('votedRes')
         }

        })


        socket.on('sendMessage',async(data)=>{
          let res= await  setMessage(data)

          if(res){
            io.emit('updated')
          }
        })


        socket.on('typing',async(data)=>{
            let res=await whoUser(data)
            console.log("userrrrrrrrrrrrrrrrr"+res)
            socket.emit('showTyping',{res})
        })

        socket.on('stopTyping',()=>{
            socket.emit('stopTyping')
        })


    })





}

export default socketConfig