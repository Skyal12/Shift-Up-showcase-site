import logo from "../img/img-logo.jpg";

export default function NavBar() {
  return (
    <nav className="navBar z-5 sticky top-4 left-0 w-full h-12 text-white flex flex-row justify-between items-center">
      <div className="logo flex justify-center items-center w-32">
        <a href="#">
          <img src={logo} alt="Logo" className="w-8 h-8" />
        </a>
      </div>

      <div className="link flex justify-center items-center gap-12 w-2/4 text-sm">
        <a href="#">Concept</a>
        <a href="#">Experience</a>
        <a href="#">Tarification</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
