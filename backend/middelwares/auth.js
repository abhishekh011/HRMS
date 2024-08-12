import jwt from "jsonwebtoken";
export const auth = async (request,response,next)=>{
   try{
      let token = request.headers.authorization.split(" ")[1];
      console.log(token);
      jwt.verify(token,"asdfghjkl");
      next();
   }
   catch(err){
     return response.status(401).json({error:"Unauthroized access..."});
   }
}