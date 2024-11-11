import {Schema,model,Types} from "mongoose";


const pollSchema=new Schema(
    {

        question:{
            type:String,
            required:true
        },
        options:[
            {
                text: { type: String, required: true },
                votes: { type: Number, default: 0 },
            }
        ]

    }
)

const pollModel=model( 'polls',pollSchema)

export default pollModel