import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import cors ,{CorsOptions} from 'cors';
import connectDB from './src/config/connectDB';
import authRouter from './src/routes/authRouter';
import authPartnerRouter from './src/routes/authPartnerRouter';
import userRouter from './src/routes/userRouter';
import apartmentRouter from './src/routes/apartmentRouter';
import partnerRouter from './src/routes/partnerRouter';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import {v2 as cloudinary} from 'cloudinary';


//create app
const app = express();
//dotenv config
dotenv.config({path:'./.env'})
//cloudinary config
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(morgan('dev'))

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




//conncet DB
connectDB();

////deploy front-end services
app.use(express.static(path.join(__dirname,'../../client/dist')))

//routes
app.use('/auth',authRouter)
app.use('/api',userRouter)
app.use('/api',partnerRouter)
app.use('/api',apartmentRouter)
app.use('/auth-partner',authPartnerRouter)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist', 'index.html'));
});

app.all("*",(req:Request,res:Response)=>{
    res.status(500).json({error:'there is not ulr like this'})
})

const PORT = process.env.PORT || 5001
app.listen(PORT,()=>{
    console.log(`the server run at ${PORT}`)
})