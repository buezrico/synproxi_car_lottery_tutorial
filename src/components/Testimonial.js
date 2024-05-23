import React from "react";
import img1 from "../assets//images/cllient1.png";
import { Slide } from "react-awesome-reveal";

function Testimonial() {
  return (
    <section className="flex flex-col md:flex-row h-full overflow-hidden">
      <div className="w-full md:w-1/2 bg-[#e7edfa] h-[50vh] flex flex-col items-center justify-center text-center px-10 gap-8">
        <Slide direction="left">
          <p className="text-xl font-semibold">
            Unbelievable this is a dream come true, <br /> no way would I ever
            think I would own a car like this. What great blokes. <br /> Thank
            you very much! <br /> 5 star from!!!
          </p>
          <p className="uppercase text-lg">Danny Churchman</p>
        </Slide>
      </div>

      <Slide
        direction="right"
        className="w-full md:w-1/2 h-[50vh] overflow-hidden"
      >
        <img src={img1} alt="" className="h-full w-full" />
      </Slide>
    </section>
  );
}

export default Testimonial;
