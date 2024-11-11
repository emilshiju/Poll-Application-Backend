import pollModel from "../model/poll.js"
import userSelectionModel from "../model/userSelection.js";




export const createPoll=async(req,res,next)=>{



    try {

        console.log(req.body)
        const { question, options } = req.body;
    
    
        console.log(req.body.options)

    
        const formattedOptions = options.map(option => ({
            text: option,
            votes: 0, // Initialize votes to 0
        }));
        console.log(formattedOptions)
    
        // Create a new poll document
        const res = await pollModel.create({
            question: question,
            options:formattedOptions,
        });

        console.log(res)
        
    } catch (error) {
        next(error)
        
    }
}



export const  getPoll=async(req,res,next)=>{



    try{

        const userId=req.params.id


        const response=await pollModel.findOne({})

        const poll=await userSelectionModel.find({userId})
        let curr=poll||null
        console.log("hereeeeeeeeeeeee")
        console.log(poll)
        console.log(curr[0]?.pollOptionId.toString())
        let id=curr[0]?.pollOptionId.toString()
        console.log("iddddddddddddddddd",id)



        return res.json({res:response,curr:id})


    }catch(error){
        next(error)
    }
}

export const votePoll=async(voteId,pollId,userId)=>{


    try{


        const existingVote =await userSelectionModel.findOne({userId,pollId})
        console.log(existingVote)

        if(existingVote){

            await userSelectionModel.deleteOne({_id: existingVote._id})

            await pollModel.updateOne(
                {_id:pollId ,"options._id":existingVote.pollOptionId},
                { $inc: { "options.$.votes": -1 } }
            )
        }
        console.log("mmmmmmmmmmmmmmmmmmmmmmmmm")
        console.log(voteId,pollId,userId)

        const newVote = new userSelectionModel({
            userId,
            pollId,
            pollOptionId:voteId
        });
        await newVote.save()
        console.log("lkfhsdiufhishfiudsf")

        await pollModel.updateOne(
            { _id: pollId, "options._id": voteId },
            { $inc: { "options.$.votes": 1 } }
        );



        return true




    }catch(error){
        console.log(error)
    }
}