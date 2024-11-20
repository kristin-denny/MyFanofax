import SaveActorForm from "./SaveActorForm";

interface ActorCardProps {
    actorName: string;
    actorImage: string;
}

export default function ActorCard({actorName, actorImage}: ActorCardProps) {

return (
    

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-48 h-48 mb-3 rounded-full shadow-lg" src={actorImage} alt={actorName}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{actorName}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-bold">age: </span> <span className="font-bold">nationality: </span></p>
        <div className="flex mt-4 md:mt-6">
            <SaveActorForm />
        </div>
    </div>
</div>

)

}