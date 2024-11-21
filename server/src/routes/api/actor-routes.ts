import express from 'express';
import type { Request, Response } from 'express';
import {  Actor } from '../../models/index.js';

import getActor from '../../service/actorService.js'


const router = express.Router();
//search actor from database
router.post('/find', async (req: Request, res: Response) => {
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
    // const {actorName, movies, comments, headshotURL userId} = req.body;
    // const parsedMovies = movies.map((movieObj: any) => { return JSON.stringify(movieObj) });
    // console.log("actorName", typeof actorName);
    // console.log("movies", typeof movies);
    // console.log("comments", typeof comments);
    // console.log("headshotURL", typeof headshotURL);
    // console.log("userId", typeof userId);
    try {
        const actorData = await Actor.create(req.body);
    console.log(actorData);
       return res.status(200).json(actorData);
    } catch (err) {
       return res.status(400).json(err);
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

router.post('/all', async (req: Request, res: Response) => {
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
