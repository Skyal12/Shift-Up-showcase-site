export default function contact() {
  return (
    <section
      id="contact"
      className="contact snap-center bg-[#ededed] h-screen w-full mx-auto flex flex-col h-auto p-20 pt-32 pb-32"
    >
      <h3 className="text-4xl text-[#ff4800] font-bold mb-4">
        Parlons de votre projet
      </h3>
      <p className="text-xl text-[#ff4800]">
        Vous souhaitez engager vos équipes et structurer votre démarche RSE ?
        Nos équipes vous accompagnent.
      </p>
      <div className="container-form text-[#ff4800] flex flex-col justify-center items-center gap-12 mt-16">
        <form>
          <div className="flex flex-row gap-8 mb-8">
            <input
              className="w-1/2 border-b-2 border-solid border--600 offset-2"
              type="text"
              id="name"
              name="name"
              placeholder="Nom"
            />
            <input
              className="w-1/2 border-b-2 border-solid border--600"
              type="text"
              id=" firtsName"
              name="firtsName"
              placeholder="Prénom"
            />
          </div>
          <div className="flex flex-row gap-8 mb-8">
            <input
              className="w-full border-b-2 border-solid border--600"
              type="text"
              id="entreprise"
              name="entreprise"
              placeholder="Nom de l'entreprise"
            />
          </div>
          <div className="flex flex-row gap-8 mb-8">
            <input
              className="w-full border-b-2 border-solid border--600"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-row gap-8 mb-8">
            <textarea
              className="w-full border-2 rounded-md bg-[#ededed] h-32 border-solid border--600"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-1/3 h-12 text-white rounded-full bg-[#1ee494] hover:bg-[#1ee494]/80 hover:text-white transition-all duration-300 cursor-none hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
