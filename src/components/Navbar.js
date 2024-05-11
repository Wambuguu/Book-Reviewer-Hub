import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="bg-black bg-opacity-30">
      <div className="flex justify-between container p-4 items-center">
        <div>
          <img src={logo} alt="logo" width={70} height={70} />
        </div>
        <nav className="flex flex-row gap-4">
          <ul className="flex flex-row items-center gap-4 ">
            <li className="hover:bg-blue-700 text-white font-bold">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-blue-700 text-white font-bold">
              <Link to="/books">Books</Link>
            </li>
            <li className="hover:bg-blue-700 text-white font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:bg-blue-700 text-white font-bold">
              <Link to="/add-review">Add Review</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
