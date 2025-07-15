import Award from "./Award";
import Hero from "./Hero";
import Education from "./Education";
import Pricing from "./Pricing";
import Stacks from "./Stacks";
import Openaccount from "../Openaccount";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Award />
      <Stacks />
      <Pricing />
      <Education />
      <Openaccount />
    </div>
  );
};

export default Homepage;
