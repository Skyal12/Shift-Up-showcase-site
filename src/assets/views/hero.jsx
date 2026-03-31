export default function Hero() {
  return (
    <section
      id="hero"
      className="hero absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col"
    >
      <h1 className="font-primary text-5xl font-bold w-auto h-auto text-[#ff4800] mx-auto text-center">
        Boostez l’engagement RSE
      </h1>
      <h2 className="font-secondary text-center mt-8 text-2xl text-[#ff4800] font-secondary">
        Transformez votre stratégie RSE en actions concrètes grâce vos équipes.
      </h2>
      <div className="cta flex flex-row justify-center items-center gap-12 mt-12">
        <a href="#concept">
          <button className="bg-[#1ee494] text-white w-40 p-4 rounded-full cursor-none transform hover:scale-110 hover:bg-[#1ee494]/80 duration-300">
            Concept
          </button>
        </a>
        <a href="#tarif">
          <button className="bg-[#1ee494] text-white w-40 p-4 rounded-full cursor-none transform hover:scale-110 hover:bg-[#1ee494]/80 duration-300">
            Tarification
          </button>
        </a>
      </div>
    </section>
  );
}
