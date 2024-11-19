import Movie from './Movie';

export default interface Actor {
    name: string;
    movies: Movie[];
    headshotURL: string;
};
