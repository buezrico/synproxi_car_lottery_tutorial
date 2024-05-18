import { Bounce, Slide } from "react-awesome-reveal";
import car from "../assets/images/car.png";

const Hero = () => {
  return (
    <main className="w-full flex justify-center items-center py-10 lg:py-20">
      <div className="w-[90%] flex flex-col lg:flex-row justify-between items-center space-y-10">
        <div className="w-full lg:w-2/6 space-y-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold">
            Could you be our <br />{" "}
            <span className="text-red-500">next winner?</span>
          </h1>
          <Bounce>
            <button className="text-white font-semibold bg-blue-500 rounded-lg px-8 py-3 hover:bg-blue-700">
              Enter Now
            </button>
          </Bounce>
        </div>

        <div className="w-full lg:w-4/6 flex items-center justify-center">
          <Slide direction="right">
            <div className="">
              <img src={car} alt="Car" />
            </div>
          </Slide>
        </div>
      </div>
    </main>
  );
};

export default Hero;
