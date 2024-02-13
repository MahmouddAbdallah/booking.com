import express from 'express';
import authPartner from '../middleware/authPartner';
import { verfiyPartner } from '../controllers/partnerController';

const router =express.Router();

router.get('/partner/verfiy',authPartner,verfiyPartner);

export default router