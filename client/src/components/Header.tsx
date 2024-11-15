import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="p-4 text-white bg-gray-900 dark:bg-gray-800">
      <div className='flex justify-between items-center lg:max-w-6xl mx-auto'>
      <h6 className="text-xl font-bold">MyFanofax</h6>
      <Navigation />  
      </div>
    </header>
  );
}
