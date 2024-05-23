import React from "react";

function SingleWinner({ img, name, date }) {
  return (
    <div className="shadow-lg rounded-lg relative h-full hover:shadow-2xl transition-shadow duration-500">
      <div className="w-full h-52 md:h-48">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      <div className="p-6 pb-2 space-y-1">
        <p className="font-bold text-lg">{name}</p>

        <p>{date}</p>
      </div>
    </div>
  );
}

export default SingleWinner;
