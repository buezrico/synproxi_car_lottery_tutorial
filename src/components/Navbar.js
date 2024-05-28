import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex w-full justify-center relative">
      <div className="flex justify-between items-center w-[90%] py-6">
        <a href="/" className="font-extrabold text-xl">
          LOGO<span className="text-red-500">AUTO</span>
        </a>
        <ul className="hidden gap-4 lg:flex text-sm font-semibold">
          <li className="cursor-pointer hover:text-red-500">
            Latest Competitions
          </li>
          <li className="cursor-pointer hover:text-red-500">Entry Lists</li>
          <li className="cursor-pointer hover:text-red-500">Live Draws</li>
          <li className="cursor-pointer hover:text-red-500">Winners</li>
          <li className="cursor-pointer hover:text-red-500">Gift Cards</li>
          <li className="cursor-pointer hover:text-red-500">How it Works</li>
        </ul>

        {nav && (
          <ul className="gap-4  font-semibold p-8  top-0 right-0 bg-blue-200 fixed h-screen space-y-8 text-lg z-50">
            <li className="cursor-pointer hover:text-red-500">
              Latest Competitions
            </li>
            <li className="cursor-pointer hover:text-red-500">Entry Lists</li>
            <li className="cursor-pointer hover:text-red-500">Live Draws</li>
            <li className="cursor-pointer hover:text-red-500">Winners</li>
            <li className="cursor-pointer hover:text-red-500">Gift Cards</li>
            <li className="cursor-pointer hover:text-red-500">How it Works</li>
          </ul>
        )}

        {!nav ? (
          <div
            className="text-red-600  cursor-pointer lg:hidden"
            onClick={() => setNav(true)}
          >
            <GiHamburgerMenu size={24} />
          </div>
        ) : (
          <div
            className="text-red-600  cursor-pointer lg:hidden"
            onClick={() => setNav(false)}
          >
            <IoIosCloseCircleOutline size={24} />
          </div>
        )}

        <div className="space-x-4">
          <button className="text-red-500 font-semibold hover:text-red-700">
            Login
          </button>
          <button className="bg-red-500 font-semibold px-8 py-3 text-white rounded-lg hover:bg-red-700">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
