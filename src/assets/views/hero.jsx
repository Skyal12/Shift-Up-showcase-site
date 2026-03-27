export default function Hero() {
  return (
    <section
      id="hero"
      className="hero absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col"
    >
      <h1 className="text-6xl font-bold mx-auto text-center">
        Boostez l’engagement votre RSE
      </h1>
      <h2 className="text-center mt-8 text-2xl">
        Transformez votre stratégie RSE en actions concrètes grâce vos équipes.
      </h2>
      <div className="cta flex flex-row justify-center items-center gap-12 mt-12">
        <a href="#concept">
          <button className="bg-gray-800 text-white w-32 p-4 rounded-full cursor-none transform hover:scale-110 duration-300">
            Concept
          </button>
        </a>
        <a href="#tarif">
          <button className="bg-gray-800 text-white w-32 p-4 rounded-full cursor-none transform hover:scale-110 duration-300">
            Tarification
          </button>
        </a>
      </div>
    </section>
  );
}
