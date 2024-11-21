type MovieCardProps = {
    mediaType?: string; // Optional property since we mostlike will be using this component for movies only, to include other media types like TV shows means we need to change the component to be more generic
    movieName: string;
    posterURL: string;
    releaseDate: string;
    summary: string;
};

export default function MovieCard(movie: MovieCardProps) {

    return (
        

<div className="max-w-sm my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg w-full" src={movie.posterURL} alt={movie.movieName + "image poster"} />
    <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.movieName}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{movie.releaseDate}</span>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.summary}</p>
    </div>
</div>

    )
}