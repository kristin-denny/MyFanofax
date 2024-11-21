import SaveActorForm from "./SaveActorForm";
import DeleteActorForm from "./DeleteActorForm";

interface ActorCardProps {
    actorName: string;
    actorImage: string;
    deleteFlag?: boolean;
    actorId?: number;
}

export default function ActorCard({actorName, actorImage, deleteFlag = false, actorId=0}: ActorCardProps) {

return (
    

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-col items-center py-10">
        <img className="w-48 h-48 mb-3 rounded-full shadow-lg" src={actorImage} alt={actorName}/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{actorName}</h5>
        <div className="flex mt-4 md:mt-6">
            {deleteFlag ? <DeleteActorForm actorId={actorId} /> : <SaveActorForm />}
        </div>
    </div>
</div>

)

}