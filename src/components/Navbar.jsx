/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineBars3 } from "react-icons/hi2";
import { TbLetterX } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import logo2 from "../assets/react.svg";
import Login from "./Login";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="bg-yellow-400 text-black w-screen  justify-between overflow-x-hidden">
      <nav className="bg-yellow-400 text-black xl:p-4 py-1 xl:mb-0 md:p-2 mb-20 flex overflow-x-hidden roboto-regular justify-between">
        <div className="text-center">
        <div className="xl:hidden flex ">
        <span
          className="text-white relative z-40"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? (
            <TbLetterX className="text-black w-8 h-8 bottom-3 fixed top-3 left-8 " />
          
          ) : (
            <HiOutlineBars3 className="text-black w-10 h-10 fixed  top-3 left-8 " />
          )}
        </span>
        {show && (
          <div className="  z-30  w-[75%] text-white bg-black  backdrop-blur-md   gap-7 flex flex-col barlow-condensed-regular items-start right-0 text-base  pl-5 pr-20 top-0 pt-20 h-screen absolute ">
            <NavLink className="flex items-center gap-2" to={"solution"}>
              <p>Home</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/learn"}>
              <p>Learn</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"/about"}>
              <p>About </p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"login"}>
              <p>Login</p>
            </NavLink>
            <NavLink className="flex items-center gap-2" to={"get-started"}>
              <p>Get Started</p>
            </NavLink>
          </div>
        )}
      </div>
          <Link to={"/"}>
            <img src={logo} alt="" className="w-auto ml-36 xl:ml-1 h-[50px] md:ml-[360px] p-2 overflow-hidden" />
            {/* <h1 className='text-[10px] '>MOVIEAPP</h1> */}
          </Link>
        </div>

        {/* <div className="md:flex gap-14 text-black pt-3 text-[13px] pl-20  hidden uppercase ">
          <p>Home</p>
          <p>Genre</p>
          <p>Country</p>
          <p>Movies</p>
          <p>Tv Shows</p>
          <p>Top IMdb</p>
          <p>Android App</p>
        </div> */}
        <div className=" hidden lg:flex lg:bg-transparent  lg:pr-[300px]  p-2 text-black">
          <div className="flex justify-between gap-10  lg:ml-56 uppercase roboto-regular">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/"}
            >
              {" "}
              <p className="tracking-widest">Home</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/genre"}
            >
              {" "}
              <p className="tracking-widest">Genre</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/country"}
            >
              {" "}
              <p className="tracking-widest">Country</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/movies"}
            >
              {" "}
              <p className="tracking-widest">Movies</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/shows"}
            >
              {" "}
              <p className="tracking-widest">Tv Shows</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/imdbs"}
            >
              {" "}
              <p className="tracking-widest">Top Imdb</p>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "border-b-2  border-white flex items-center  gap-2"
                  : " flex items-center  gap-2"
              }
              to={"/andriod"}
            >
              {" "}
              <p className="tracking-widest">Android App</p>
            </NavLink>
          </div>
        </div>
        <div className=" gap-3 md:flex hidden">
        </div>
        <div className="lg:flex absolute right-3 gap-6 text-black pt-3   p-2 bg-white m-2 mr-8 rounded">
          <Link to={"login"}>Login</Link>
        </div>
      </nav>
      <div>
        <div className="flex justify-center">
          <p className="text-center text-3xl hidden xl:flex lg:flex   text-gray-800  roboto-light  my-10 mb-20">
            Find Movies, Tv shows and more
          </p>
        </div>
        <div className="flex absolute top-20 left-[-25px]  xl:top-[215px] xl:left-[200px] lg:left-[300px] gap-8 items-center">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              {/* <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"><!-- ... --></svg> */}
            </span>
            <input
              className="placeholder:italic placeholder:text-slate-400 block rounded-md roboto-light bg-white lg:w-full ml-10 md:pr-[500px] md:px-12 border border-slate-300 lg:rounded-[50px] xl:py-8 py-5 px-20 h-6 xl:px-[65px] xl:pr-[580px]  lg:pl-9 lg:pr-[500px] shadow-xl focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  sm:text-xl"
              placeholder="Enter keywords..."
              type="text"
              name="search"
            />
            <FaSearch className="absolute  md:top-[13px] md:text-[15px] md:left-[55px] xl:top-6 xl:left-[65px] xl:text-[20px]" />
            
          </label>
          <FaArrowRight className=" ml-4  hidden xl:flex  lg:flex bg-white   text-[65px] rounded-full border-2 p-5 " />
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
