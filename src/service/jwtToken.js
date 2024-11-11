
import jwt from "jsonwebtoken";


export const accesToken=(userName,email,id)=>{

    const secretOrPrivateKey =
    process.env.ACCESS_TOKEN_SECRET 

  const token = jwt.sign(
    {
      username: userName,
      email: email,
      id: id,
    },
    
    secretOrPrivateKey,
    { expiresIn: "5d" }
  );

  console.log(
    "ccreating creatn creaitn creaitn creta ty token token token otken eotne token"
  );
  console.log(token);
  return token;

}


export const verifyAccessToken=(req,res,next)=>{

    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
    
        if (!token) {
          return res.status(401).json({ message: "Unauthorized" });
        }
    
        const secretOrPrivateKey= process.env.ACCESS_TOKEN_SECRET 
    
        jwt.verify(token, secretOrPrivateKey, (err, decoded) => {
          if (err) {
            console.log(err);
            return res.status(401).json({ message: "Unauthorized" });
          }
    
          req.user = decoded;
    
          next();
        });
      } catch (error) {
        next(error);
      }

}