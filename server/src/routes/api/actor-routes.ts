import express from 'express';
import type { Request, Response } from 'express';
//import { Actor } from '../../models/index.js';
//import { User } from '../../models/index.js';
import getActor from '../../service/actorService.js'

const router = express.Router();
//search actor from database
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

//get users actors
// router.get('/', async (req: Request, res: Response) => {
//     try {
//       const actor = await User.findAll({
        
//       });
//       res.json(actor);
//     } catch (error: any) {
//       res.status(500).json({ message: error.message });
//     }
//   });

export { router as actorRouter };