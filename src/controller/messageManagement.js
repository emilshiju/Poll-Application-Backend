
import messageModel from "../model/message.js"
import UserModel from "../model/user.js"


export const  setMessage=async(data)=>{



    const {userId,currentMessage}=data




    console.log(userId,currentMessage)


    const response=await messageModel.create({sender:userId,message:currentMessage})

    return true




}


export const getAllMessaege=async(req,res)=>{


    const allMessage=await messageModel.find({})
    console.log(allMessage)


    return res.json({all:allMessage})


}

export const whoUser=async(data)=>{
    console.log("user"+data.username)

    let res=await UserModel.findById(data.username)

    console.log(res)
    return res.userName
}