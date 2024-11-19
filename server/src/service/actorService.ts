import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

// interface Movie {
//     movieName: string;
//     summary: string;
//     releaseDate: string;
//     mediaType: string;
//     posterURL: string
// }

// interface Actor {
//     actorName: string;
//     movies: Movie[];
//     headshotURL: string;
// }

// const parseActorData = (actorData: any) => {


// };



// const fetchActorData = async (actorFName: string, actorLName: string) => {

//     const actorQuery: string = path.join(`${process.env.API_BASE_URL}`, `3/search/person?query=${actorFName}%2B${actorLName}&api_key=${process.env.API_KEY}`);
//     const actorResponse = await fetch(actorQuery);
//     const actorData = await actorResponse.json();
//     const parsedActorData = parseActorData(actorData);
//     console.log(actorData);
//     return parsedActorData;


// };

const getActor = async (actorName: string) => {
    const nameSplice = actorName.split(' ');
    const actorFName = nameSplice[0];
    const actorLName = nameSplice[1];
    const actorQuery: string = path.join(`${process.env.API_BASE_URL}`, `3/search/person?query=${actorFName}%2B${actorLName}&api_key=${process.env.API_KEY}`);
    const actorResponse = await fetch(actorQuery);
    const actorData = await actorResponse.json();
    // const parsedActorData = parseActorData(actorData);
    console.log(actorData);
    return actorData;


};

export default getActor;