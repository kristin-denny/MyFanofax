import SaveActorForm from "./SaveActorForm";
import DeleteActorForm from "./DeleteActorForm";

interface ActorCardProps {
    actor: any;
    deleteFlag?: boolean;
}


export default function ActorCard({actor, deleteFlag = false}: ActorCardProps) {

return (
    

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-48 h-48 mb-3 rounded-full shadow-lg" src={actor.headshotURL} alt={actor.actorName}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{actor.actorName}</h5>
        <p className={`mt-4 font-bold ${actor.comments ? "" : "hidden"}`}>comment:</p>
        <p>{actor.comments ? actor.comments : ""}</p>
        <div className="w-full flex mt-4 md:mt-6 items-center justify-center">
           
            {deleteFlag ? <DeleteActorForm actorId={actor.actorId} /> : <SaveActorForm />}
        </div>
    </div>
</div>

)

}