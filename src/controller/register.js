import UserModel from "../model/user.js"
import { accesToken } from "../service/jwtToken.js"



 const Register=async(req,res,next)=>{

    console.log(req.body)

   
const response=await UserModel.create({
    userName:req.body.name,
    email:req.body.email,
    password:req.body.password

})

const AccesToken = accesToken(response.userName,response.email,response._id)


  
console.log("created succesfully")
console.log(response)
return res.status(200).json({ status: true ,token:AccesToken,userDetails:response});


}

export default Register