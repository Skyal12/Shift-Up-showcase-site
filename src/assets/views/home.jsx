// views
import Hero from "./hero";
import Concept from "./concept";
<<<<<<< HEAD
import Faq from "./faq";
import Contact from "./contact";
import Experience from "./experience";
import Tarif from "./tarif";
=======
>>>>>>> 541d341 (gros travail ce soir ajout de script pour hero, concept, cursor, home, app, ajout de tailwind, ajout de componsant tel que lightrays, cursor, backtop, navbar, title et ajout d'image provisoir)

// comp
import LightRays from "../comp/lightRays";
export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
        <Hero />
      </div>
      <Concept />
      <Experience />
      <Tarif />
      <Faq />
      <Contact />
    </>
  );
}
