import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

function SingleCompetition({ img, title, price, oldPrice, ticketsRemaining }) {
  return (
    <div className="shadow-lg rounded-lg relative h-full hover:shadow-2xl transition-shadow duration-500">
      <div className="w-full h-52 md:h-48">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      <div className="p-6 pb-2 space-y-1">
        <p className="font-bold text-lg">{title}</p>

        <div className="flex items-end gap-2">
          <p className="text-2xl font-bold text-red-500">{price}</p>
          <p className="line-through text-slate-500">{oldPrice}</p>
        </div>

        <p>{ticketsRemaining} tickets remaining</p>

        <div className="absolute bottom-0 right-0 size-8 flex items-center justify-center text-white bg-blue-600 rounded-tl-lg rounded-br-lg">
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}

export default SingleCompetition;
