//this page will display the favarite actor details and also provide the option to remove the actor from the favorite list
import { useParams } from 'react-router-dom';
import { revertSlug } from '../utils/actorNameSlug';

export default function FavoriteActor() {

  const { name } = useParams<{ name: string }>();

  // Check if name is defined before calling revertSlug
  const originalName = name ? revertSlug(name) : "Actor not found"; // Fallback in case name is undefined

    return (
      <section className='my-6'>
        <h1 className="text-3xl font-bold mb-4 text-center md:text-left">Favorite Actor Details</h1>

        <div>
          Displaying api favorite data for actor: {originalName}
        </div>
      </section>
    );
  }
  