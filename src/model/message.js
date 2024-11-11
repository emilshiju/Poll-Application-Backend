import mongoose, {Schema,model,Types} from "mongoose";


const messageSchema=new Schema(

    {
        sender:{
            type:mongoose.Schema.Types.ObjectId,
            required:true
        },
        message:{
            type:String,
            required:true
        }

    }
)

const messageModel=model('message',messageSchema)

export default messageModel