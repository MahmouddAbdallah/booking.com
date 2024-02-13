import express from 'express';
import { updateUser, verfiyUser } from '../controllers/userController';
import auth from '../middleware/auth';

const router =express.Router();

router.get('/user/verfiy',auth,verfiyUser);

router.route('/user/:id')
    .put(updateUser)

export default router