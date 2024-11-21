import { FaGithub, FaEnvelope } from 'react-icons/fa';
import redPanda from '../img/RedPanda.png';
import wolf from '../img/Wolf.png';
import blackJaguar from '../img/BlackJaguar.png';

const users = [
  {
    username: 'Kristin Denny',
    github: 'https://github.com/kristin-denny',
    email: 'kristingdenny@gmail.com',
    image: redPanda, 
  },
  {
    username: 'Jose W Rivas',
    github: 'https://github.com/williamscodigo',
    email: 'williamscodigo@gmail.com',
    image: wolf, 
  },
  {
    username: 'Michael Wahba',
    github: 'https://github.com/mwahba624',
    email: 'mwahba624@gmail.com',
    image: blackJaguar, 
  },
];

export default function About() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto max-w-6xl">
    
        {/* Meet Our Team Description */}
        <div className="mb-16 sm:flex items-center max-w-screen-xl mx-auto">
          {/* Image Section */}
          <div className="sm:w-1/2 p-10">
            <div className="image text-center">
              <img
                src="https://i.imgur.com/WbQnbas.png"
                alt="Team Illustration"
                className="object-cover mx-auto"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="sm:w-1/2 p-5">
            <div className="text">
              <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
                About Us
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl">
                About <span className="text-indigo-600">Our Project</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
              We created a full-stack application that allows users to create, read, update, and delete notes about their favorite actors. We also implemented user authentication using JWT tokens. We hope you enjoy using our application!
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          MEET OUR TEAM
        </h2>

        {/* User Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Profile Image */}
              <img
                src={user.image}
                alt={user.username}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              {/* Username */}
              <h3 className="text-xl font-semibold text-center text-gray-800">{user.username}</h3>

              {/* GitHub */}
              <div className="flex items-center justify-center mt-4">
                <FaGithub className="text-blue-600 mr-2" />
                <a
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600"
                >
                  {user.github.replace('https://', '')}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center justify-center mt-2">
                <FaEnvelope className="text-blue-600 mr-2" />
                <a
                  href={`mailto:${user.email}`}
                  className="text-gray-700 hover:text-blue-600"
                >
                  {user.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
