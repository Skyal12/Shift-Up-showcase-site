import Home from "./assets/views/home";
import "./App.css";

// comp
import Cursor from "./assets/comp/cursor";
import BackTop from "./assets/comp/back-top";
import Title from "./assets/comp/title";
import NavBar from "./assets/comp/navBar";
function App() {
  return (
    <>
      <Cursor />
      <NavBar />
      <BackTop />
      <Title />
      <Home />
    </>
  );
}

export default App;
