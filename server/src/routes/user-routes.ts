import express from 'express';
import type { Request, Response } from 'express';
import { User } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username: username }
    });
    if (user) {
      res.status(500).json("username already exists");
    } else {
      const newUser = await User.create({ username, password });
      const secretKey = process.env.JWT_SECRET_KEY || '';
      const token = jwt.sign({ username }, secretKey, { expiresIn: '48h' });
      const returnData = {
        user: newUser, 
        token: token
      };
      res.status(201).json(returnData);
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: { username: username }
    });
    if (user) {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (!passwordCheck) {
        res.status(401).json({ message: 'Authentication failed' });
      }
    
      const secretKey = process.env.JWT_SECRET_KEY || '';
    
      const token = jwt.sign({ username }, secretKey, { expiresIn: '48h' });
      res.json({ user, token });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as userRouter };
