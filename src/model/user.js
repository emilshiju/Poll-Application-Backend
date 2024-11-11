import {Schema,model,Types} from "mongoose";

const userSchema=new Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        role:{
            type:Boolean,
            default:false
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        imageUrl:{
            type:String,
            default:"https://randomuser.me/api/portraits/women/21.jpg"
        },
        
    },
    {
        timestamps: true 
    }
)

const UserModel=model("users",userSchema)



export default UserModel