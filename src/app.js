import express from  'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  Credential: true
}))

app.use(express.json({limit: "16kb"})) //this is use for coming data in json form
app.use(express.urlencoded({extended: true , limit: "16kb"})) //this is use for coming data in url form
app.use(express.static("public"))
app.use(cookieParser())


export { app }