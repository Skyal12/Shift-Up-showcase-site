// views
import Hero from "./hero";
import Concept from "./concept";
import Faq from "./faq";
import Contact from "./contact";
import Experience from "./experience";
import Tarif from "./tarif";
import Faq from "./faq";
import Contact from "./contact";

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
