import SingleCompetition from "./SingleCompetition";
import car1 from "../assets/images/car1.png";
import car2 from "../assets/images/car2.png";
import car3 from "../assets/images/car3.png";
import car4 from "../assets/images/car4.png";
import { Bounce, Slide } from "react-awesome-reveal";

const Competitions = () => {
  return (
    <section className="w-full flex justify-center items-center pb-40 ">
      <div className="w-[90%] space-y-8 ">
        <Slide>
          <h2 className="font-bold text-2xl">Latest Competitions</h2>
        </Slide>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Bounce cascade>
            <SingleCompetition
              img={car1}
              title={"2020 Audi S5 Coupe"}
              price={"$19.99"}
              oldPrice={"$54.68"}
              ticketsRemaining={"5878"}
            />
            <SingleCompetition
              img={car2}
              title={"2016 Ford Mustang GT"}
              price={"$7.99"}
              oldPrice={"$9.68"}
              ticketsRemaining={"3290"}
            />
            <SingleCompetition
              img={car3}
              title={"2020 Bugatti Chiron"}
              price={"$4888.99"}
              oldPrice={"$1.68"}
              ticketsRemaining={"4014"}
            />
            <SingleCompetition
              img={car4}
              title={"2019 Porsche 911 Carrera"}
              price={"$1.99"}
              oldPrice={"$2.68"}
              ticketsRemaining={"484"}
            />
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
