/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-yellow-400 text-black">
      <nav className="bg-yellow-400 text-black p-4 flex roboto-regular justify-between">
        <div className="text-center">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-auto h-[50px] p-2" />
            {/* <h1 className='text-[10px] '>MOVIEAPP</h1> */}
          </Link>
        </div>
        <div className="flex gap-14 text-black pt-3 text-[13px] pl-20  uppercase ">
          <p>Home</p>
          <p>Genre</p>
          <p>Country</p>
          <p>Movies</p>
          <p>Tv Shows</p>
          <p>Top IMdb</p>
          <p>Android App</p>
        </div>
        <div className="flex gap-6 text-black pt-3  p-2 bg-white m-2 mr-8 rounded">
          <p className="bellefair-regular ">Login</p>
        </div>
      </nav>
      <div>
        <div className="flex justify-center">
          <p className="text-center text-3xl  text-gray-800  roboto-light  my-10 mb-20">
            Find Movies, Tv shows and more
          </p>
        </div>
        <div className="flex absolute top-[215px] left-[300px] gap-8 items-center">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg> */}
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block roboto-light bg-white w-full border border-slate-300 rounded-[50px] py-5  pl-9 pr-[500px] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  sm:text-xl"
              placeholder="Enter keywords..."
              type="text"
              name="search"
            />
          </label>
          <FaArrowRight className="   bg-white   text-[50px] rounded-3xl border-2 p-4 " />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
