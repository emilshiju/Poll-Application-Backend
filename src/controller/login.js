import UserModel from "../model/user.js"
import { accesToken } from "../service/jwtToken.js"





const Login=async(req,res,next)=>{



    try{

  
    const response=await UserModel.findOne({email:req.body.email,password:req.body.password})


     if(response){
   
    const AccesToken = accesToken(response.userName,response.email,response._id,)

    
      
    
    return res.status(200).json({ status: true ,token:AccesToken,userDetails:response});

     }
   console.log("herwee")
     return res.json({status:false})

    }catch(error){
        
        next(error)
    }

}

export default Login