import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../../models/index.js';


const router = express.Router();
//create new user
router.post('/', async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
      const newUser = await User.create({ username, password });
      res.status(201).json(newUser);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  export { router as userRouter };