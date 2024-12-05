import "../styles/Container.css";
import Image from "./Image";
import Intro from "./Intro";
import Preparation from "./Preparation";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";
export default function Container() {
  return (
    <div className="container">
      <Image />
      <Intro />
      <Preparation />
      <Ingredients />
      <Instruction />
      <Nutrition />
    </div>
  );
}
