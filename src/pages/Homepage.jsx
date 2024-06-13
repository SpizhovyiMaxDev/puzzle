import Proud from "../features/categories/Proud";
import Benefits from "../sections/Benefits";
import Cta from "../sections/Cta";
import Hero from "../sections/Hero";

function Homepage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Proud />
      <Cta />
    </>
  );
}

export default Homepage;
