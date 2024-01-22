import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import cors ,{CorsOptions} from 'cors';
import connectDB from './src/config/connectDB';
import authRouter from './src/routes/authRouter';
import userRouter from './src/routes/userRouter';
import cookieParser from 'cookie-parser';
import path from 'path';

//create app
const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

const allowedOrigins = ['http://localhost:5000', 'http://localhost:5173'];
const corsOptions: CorsOptions = {
origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
    } else {
        callback(new Error('Not allowed by CORS'));
    }
},
credentials: true,
};

app.use(cors({
    origin:true,
    credentials:true
}));



//dotenv config
dotenv.config({path:'./.env'})

//conncet DB
connectDB();


////
console.log(path.join(__dirname,'../../client/dist'));
app.use(express.static(path.join(__dirname,'../../client/dist')))



//routes
app.use('/auth',authRouter)
app.use('/api',userRouter)

app.all("*",(req:Request,res:Response)=>{
    res.status(500).json({error:'there is not ulr like this'})
})

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`the server run at ${PORT}`)
})