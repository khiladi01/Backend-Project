// require ('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path : './env'
})

connectDB()
.then( () => {
    app.listen( process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
        app.on( "error" , (error) => {
           console.log("server connectivity problem :",error )
        });
        throw error
    })
} )
.catch((error) => {
    console.log("MONGODB connection Failed :",error)
})















/*
import express from "express"
const app = express()

( async() => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERROR :", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listining on port 
            ${process.env.PORT}`)
       })

    } catch (error) {
        console.log("ERROR :", error)
        throw error
    }
} )()

*/