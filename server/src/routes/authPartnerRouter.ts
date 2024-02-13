import {logOutPartner, loginPartner, registerPartner, verfiyPartnerEamilSignUp,verfiyPartnerEamilSingIn } from '../controllers/authPartnerController';
import express from 'express';
const router = express.Router();

router.post('/signup' ,registerPartner);
router.post('/signup/verfiy-partner-email',verfiyPartnerEamilSignUp );
router.post('/signup/verfiy-partner-email-sign-in',verfiyPartnerEamilSingIn );
router.post('/signin', loginPartner);
router.get('/log-out', logOutPartner);


export default router