const asynchandler=(func)=>{
    (req,res,next)=>{
        Promise.resolve(func(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}

/*
ASYNC METHOD
const asynchandler = (func) => {
    async (req,res,next)=>{
        try {
            await func(req,res,next)
        } catch (error) {
            res.status(error.code).json({
                success:false,
                message:error.message
            })
        }
    }
}
*/