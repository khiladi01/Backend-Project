// Desc: Async handler for express routes
const asynchandler = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status((error.code || 500).json({
            success: false,
            message:error.message
        }))
    }
}

export { asynchandler }

// This utility function streamlines the error-handling process for asynchronous route handlers, ensuring that any unhandled promise rejections are caught and properly processed. It's a clean and efficient way to manage async code in Express.js!! Let me know if you'd like further tips or insights.
