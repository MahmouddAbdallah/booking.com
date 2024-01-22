import {logOut, login, register} from '../controllers/authController';
import express from 'express';
const router = express.Router();

router.post('/signup', register);
router.post('/signin', login);
router.get('/log-out', logOut);


export default router