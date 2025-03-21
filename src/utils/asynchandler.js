const asynchandler = (requesthandler) => {
    
}





export { asynchandler }


// const asynchandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status((error.code || 500).json({
//             success: false,
//             mesage:error.message
//         }))
//     }
// }

