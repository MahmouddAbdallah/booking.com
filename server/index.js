"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const connectDB_1 = __importDefault(require("./src/config/connectDB"));
const authRouter_1 = __importDefault(require("./src/routes/authRouter"));
const authPartnerRouter_1 = __importDefault(require("./src/routes/authPartnerRouter"));
const userRouter_1 = __importDefault(require("./src/routes/userRouter"));
const apartmentRouter_1 = __importDefault(require("./src/routes/apartmentRouter"));
const partnerRouter_1 = __importDefault(require("./src/routes/partnerRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cloudinary_1 = require("cloudinary");
//create app
const app = (0, express_1.default)();
//dotenv config
dotenv_1.default.config({ path: './.env' });
//cloudinary config
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
//middleware 
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
const allowedOrigins = ['http://localhost:5000', 'http://localhost:5173'];
const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};
app.use((0, cors_1.default)({
    origin: true,
    credentials: true
}));
//conncet DB
(0, connectDB_1.default)();
////deploy front-end services
app.use(express_1.default.static(path_1.default.join(__dirname, '../../client/dist')));
//routes
app.use('/auth', authRouter_1.default);
app.use('/api', userRouter_1.default);
app.use('/api', partnerRouter_1.default);
app.use('/api', apartmentRouter_1.default);
app.use('/auth-partner', authPartnerRouter_1.default);
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../client/dist', 'index.html'));
});
app.all("*", (req, res) => {
    res.status(500).json({ error: 'there is not ulr like this' });
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`the server run at ${port}`);
});
