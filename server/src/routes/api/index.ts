import { Router } from 'express';
import { userRouter } from './user-routes.js';
import { actorRouter } from './actor-routes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/actors', actorRouter);

export default router;