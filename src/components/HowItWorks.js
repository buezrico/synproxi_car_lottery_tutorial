import { FaArrowRightLong } from "react-icons/fa6";
import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import { Bounce, Slide } from "react-awesome-reveal";

const HowItWorks = () => {
  return (
    <section className="w-full flex justify-center items-center pb-40 competitions">
      <div className="w-[90%] space-y-16 ">
        <Bounce>
          <h2 className="font-bold text-2xl text-center">How it Works</h2>
        </Bounce>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-16 lg:flex lg:gap-0">
          <Bounce cascade>
            {steps.map((item, index) => (
              <li className="w-full flex flex-col sm:flex-row" key={index}>
                <div className="flex flex-col items-center gap-8 text-center">
                  <img src={item.image} alt="" />
                  <p>{item.step}</p>
                </div>

                <div
                  className={`p-4 pt-8 flex sm:hidden lg:flex justify-center lg:justify-start rotate-90  sm:rotate-0 ${
                    index === steps.length - 1 ? "hidden lg:hidden" : ""
                  } `}
                >
                  <FaArrowRightLong size={24} />
                </div>
              </li>
            ))}
          </Bounce>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;

const steps = [
  {
    image: icon1,
    step: "Choose a competition and how many entries you would like",
  },
  {
    image: icon2,
    step: "Answer the qualifying question (be sure to answer correctly!) and complete payment",
  },
  {
    image: icon3,
    step: "Tickets for all correct answers are entered into the draw, streamed LIVE on Facebook using Google’s random number generator",
  },
  {
    image: icon4,
    step: "If you win, we may try to contact you whilst live on Facebook, so be prepared!",
  },
];
