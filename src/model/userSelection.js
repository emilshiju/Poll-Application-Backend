import mongoose, {Schema,model,Types} from "mongoose";







const userSelectionSchema=new Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"users"
        },
        pollId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"polls"
        },
        pollOptionId: { 
            type: mongoose.Schema.Types.ObjectId, 
            required: true 
            // This ID should correspond to an option's _id in the Poll's options array
        }
    }
)

const userSelectionModel=model('userSelections',userSelectionSchema)


export default userSelectionModel