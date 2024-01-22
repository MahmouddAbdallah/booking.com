import express from 'express';
import { verfiyUser } from '../controllers/userController';
import auth from '../middleware/auth';

const router =express.Router();

router.get('/user/verfiy',auth,verfiyUser)

export default router