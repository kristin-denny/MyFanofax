import { Router } from 'express';
import apiRoutes from './api/index.js';
// import { authenticateToken } from '../middleware/auth.js';authenticateToken,
import { userRouter } from './user-routes.js';


const router = Router();

router.use('/auth', userRouter);
router.use('/api',   apiRoutes);

export default router;
