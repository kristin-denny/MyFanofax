import dotenv from 'dotenv';
dotenv.config();
import path from 'path';

interface Movie {
    movieName: string;
    summary: string;
    releaseDate: string;
    mediaType: string;
    posterURL: string
}

interface Actor {
    actorName: string;
    movies: Movie[];
    headshotURL: string;
}

const parseActorData = (actorData: any) => {
    const firstActor = actorData.results[0];
    //debugger;
    //console.log(firstActor);
    const actor: Actor = {
        actorName: firstActor.name,
        movies: [
            {
                movieName: firstActor.known_for[0].title,
                summary: firstActor.known_for[0].overview,
                releaseDate: firstActor.known_for[0].release_date,
                mediaType: firstActor.known_for[0].media_type,
                posterURL: path.join(`https://image.tmdb.org/t/p/w300_and_h450_bestv2`, `${firstActor.known_for[0].poster_path}`)
            },
            {
                movieName: firstActor.known_for[1].title,
                summary: firstActor.known_for[1].overview,
                releaseDate: firstActor.known_for[1].release_date,
                mediaType: firstActor.known_for[1].media_type,
                posterURL: path.join(`${process.env.IMAGE_BASE_URL}`, `${firstActor.known_for[1].poster_path}`)
            },
            {
                movieName: firstActor.known_for[2].title,
                summary: firstActor.known_for[2].overview,
                releaseDate: firstActor.known_for[2].release_date,
                mediaType: firstActor.known_for[2].media_type,
                posterURL: path.join(`${process.env.IMAGE_BASE_URL}`, `${firstActor.known_for[2].poster_path}`)
              
            }
        ],
        headshotURL:  path.join(`${process.env.IMAGE_BASE_URL}`, `${firstActor.profile_path}`),
        
    };
    
    return actor;

};



const fetchActorData = async (actorFName: string, actorLName: string) => {

    const actorQuery: string = path.join(`${process.env.API_BASE_URL}`, `3/search/person?query=${actorFName}%2B${actorLName}&api_key=${process.env.API_KEY}`);
    const actorResponse = await fetch(actorQuery);
    const actorData = await actorResponse.json();
    const parsedActorData = parseActorData(actorData);
    return parsedActorData;


};

const getActor = async (actorName: string) => {
    const nameSplice = actorName.split(' ');
    const actorFName = nameSplice[0];
    const actorLName = nameSplice[1];
    const actor = await fetchActorData(actorFName, actorLName);
    return actor;

};

export default getActor;
