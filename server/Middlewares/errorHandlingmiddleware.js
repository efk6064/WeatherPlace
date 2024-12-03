export const errorHandling=(err,req,res,next)=>{
    let statusCode=res.statusCode||500;
    let message=err.message||"Sorry, a server error occurred";
    return res.status(statusCode).send(message);
}