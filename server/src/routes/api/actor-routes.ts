import express from 'express';
import type { Request, Response } from 'express';
// import { Actor } from '../../models/index.js';
import getActor from '../../service/actorService.js'

const router = express.Router();
//search actor
router.post('/', async (req: Request, res: Response) => {
    const { actorName } = req.body;
    try {
      const actor = await getActor(actorName);
      if (actor) {
        res.json(actor);
      } else {
        res.status(404).json({ message: 'actor not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });
//save actor

//delete actor

export { router as actorRouter };