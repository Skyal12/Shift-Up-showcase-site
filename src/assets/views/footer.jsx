import "../utils/fontStyle.css";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* LOGO + TAGLINE */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight">Shift’Up</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            La plateforme qui transforme votre stratégie RSE en actions
            concrètes, mesurables et engageantes.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Navigation</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li>
              <a href="#concept" className="hover:text-white transition">
                Concept
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white transition">
                Experience
              </a>
            </li>
            <li>
              <a href="#rassurer" className="hover:text-white transition">
                Rassurer
              </a>
            </li>
            <li>
              <a href="#tarif" className="hover:text-white transition">
                Tarifs
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <ul className="flex flex-col gap-2 text-gray-300 text-sm">
            <li>contact@shiftup.fr</li>
            <li>+33 6 00 00 00 00</li>
            <li>Elbeuf, France</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Restez informé</h3>
          <p className="text-sm text-gray-300">
            Recevez nos actualités et conseils RSE.
          </p>
          <div className="flex flex-row gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white text-sm outline-none focus:ring-2 focus:ring-[#ff4800]"
            />
            <button className="px-4 py-2 bg-[#ff4800] text-white rounded-md text-sm font-medium hover:bg-[#e03f00] transition">
              OK
            </button>
          </div>
        </div>
      </div>
      <h3 className="font-secondary font-principal w-full text-3xl font-extrabold text-gray-100 leading-tight mt-12 tracking-tight text-start">
        Shift’Up : Action. Reaction. Transition.
      </h3>
      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs gap-4">
        <p>© {new Date().getFullYear()} Shift’Up — Tous droits réservés.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition">
            Mentions légales
          </a>
          <a href="#" className="hover:text-white transition">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
