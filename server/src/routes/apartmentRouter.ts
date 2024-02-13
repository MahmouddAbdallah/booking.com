import express from 'express';
import { verfiyPartner } from '../controllers/partnerController';
import { createApartment, fetchApartment, fetchApartments } from '../controllers/apartmentConroller';
import { upload } from '../middleware/upload';

const router =express.Router();

router.post('/apartment',upload.array('imageFiles',25),createApartment);
router.get('/apartment',fetchApartments);
router.get('/apartment/:apartmentId',fetchApartment);

export default router