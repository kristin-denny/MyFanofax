import SearchForm from "../components/SearchForm";

export default function Home() {

  return (
    <section className='my-6'>
      <h1 className="text-3xl font-bold mb-4 text-center md:text-left">MyFanofax Dashboard</h1>
      <SearchForm />
    </section>
  );
}
