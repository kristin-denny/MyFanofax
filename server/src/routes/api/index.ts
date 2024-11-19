import { Router } from 'express';
import { actorRouter } from './actor-routes.js';

const router = Router();


router.use('/actors', actorRouter);

export default router;