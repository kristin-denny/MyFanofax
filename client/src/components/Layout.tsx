import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-slate-100 text-black dark:bg-gray-900 dark:text-white transition-colors flex flex-col relative">
      <Header />
      <main className="flex-grow container mx-auto px-4 my-4 lg:max-w-5xl">
        <Outlet /> {/* Renders the nested route component */}
      </main>
      <Footer />
    </div>
  );
}
