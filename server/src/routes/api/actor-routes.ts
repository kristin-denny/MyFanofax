import express from 'express';
import type { Request, Response } from 'express';
import {  Actor } from '../../models/index.js';

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
router.post('/save', async (req: Request, res: Response) => {
    try {
        const actorData = await Actor.create(req.body);
        res.status(200).json(actorData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//delete actor
router.delete('/', async (req: Request, res: Response) => {
    const {actorId} = req.body;
    try {
        const actorData = await Actor.destroy({
            where: {
                actorId: actorId,
            },
        });

        if (!actorData) {
            res.status(404).json({ message: 'No actor found with that id!' });
            return;
        }

        res.status(200).json(actorData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get users actors

router.get('/', async (req: Request, res: Response) => {
    const {userId} = req.body;
    try {
        const actors = await Actor.findAll({
            where: { userId: userId }, 
        });
       
        res.json(actors);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});


export { router as actorRouter };