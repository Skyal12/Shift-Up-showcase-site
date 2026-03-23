export default function Hero() {
  return (
    <section className="hero absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col">
      <h1>Hero</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</h2>
      <div className="cta flex flex-row justify-center items-center gap-12 mt-12">
        <a href="#">
          <button className="bg-gray-800 text-white w-32 p-4 rounded-full cursor-none">
            Concept
          </button>
        </a>
        <a href="#">
          <button className="bg-gray-800 text-white w-32 p-4 rounded-full cursor-none">
            Tarification
          </button>
        </a>
      </div>
    </section>
  );
}
