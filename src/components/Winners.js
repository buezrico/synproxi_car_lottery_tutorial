import winner1 from "../assets/images/winner1.png";
import winner2 from "../assets/images/winner2.png";
import winner3 from "../assets/images/winner3.png";
import winner4 from "../assets/images/winner4.png";
import { Bounce, Slide } from "react-awesome-reveal";
import SingleWinner from "./SingleWinner";

const Winners = () => {
  return (
    <section className="w-full flex justify-center items-center py-20 competitions">
      <div className="w-[90%] space-y-8 ">
        <Slide>
          <h2 className="font-bold text-2xl">Latest Winners</h2>
        </Slide>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Bounce cascade>
            {winners.map((winner, index) => (
              <SingleWinner
                img={winner.img}
                name={winner.name}
                date={winner.date}
                key={index}
              />
            ))}
          </Bounce>
        </div>
      </div>
    </section>
  );
};

export default Winners;

const winners = [
  {
    img: winner1,
    name: "Ferrari 458",
    date: "12 November 2020",
  },
  {
    img: winner2,
    name: "Aquila Gullwing",
    date: "12 November 2020",
  },
  {
    img: winner3,
    name: "2020 Audi S5 Coupe",
    date: "12 November 2020",
  },
  {
    img: winner4,
    name: "Ferrari Purosangue SUV",
    date: "12 November 2020",
  },
];
