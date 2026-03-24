export default function contact() {
  return (
    <section
      id="contact"
      className="contact snap-center h-screen w-full mx-auto flex flex-col h-auto p-20 pt-32 pb-32"
    >
      <h3 className="text-3xl color-[#FFF] font-bold">Formulaire de contact</h3>
      <div className="container-form flex flex-col justify-center items-center gap-12 mt-12">
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
              className="w-full border-2 rounded-md bg-gray-800 h-32 border-solid border--600"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-32 h-12 text-white border-2 border-solid border--600 rounded-full bg-gray-800 hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-none hover:scale-105"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
