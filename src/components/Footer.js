import React from "react";

function Footer() {
  return (
    <section className="w-full flex justify-center items-center competitions bg-blue-600">
      <div className="w-[90%] text-white flex flex-col md:flex-row justify-between md:items-center py-6 gap-8">
        <a href="/" className="font-extrabold text-xl ">
          LOGOAUTO
        </a>

        <ul className="gap-4 flex flex-wrap">
          <li className="cursor-pointer">Latest Competitions</li>
          <li className="cursor-pointer">Entry Lists</li>
          <li className="cursor-pointer">Live Draws</li>
          <li className="cursor-pointer">Winners</li>
          <li className="cursor-pointer">Gift Cards</li>
          <li className="cursor-pointer">How it Works</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
