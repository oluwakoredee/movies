/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SiAxios } from "react-icons/si";

const Home = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get("http://localhost:9000/api/movies").then((res) => {
      console.log(res.data);
      setMovies(res.data);
      
    }).catch((err)=>{
        console.log(err)
    })
  }, []);

  console.log(movies)
  return (
    <div className=" pt-20 flex flex-col justify-center bg-gray-50 pb-20 items-center">
      {" "} <p className="px-10 pb-20 hidden xl:flex roboto-regular text-gray-600 text-start ">
      Why spend your hard earned cash on cable or Netflix when you can stream thousands of movies and series at no cost?<br/>
More and more people cut the cord because entertainment on demand sounds more tempting. And more and more people stop purchasing a subscription plan because they can get the same service at free online movie streaming sites. At Attacker.tv, you can watch any movie of your choice without paying a penny or even signing up. With a huge collection of movies and TV shows, Attacker.tv is confident to meet your entertainment needs and even exceed your expectations. With full HD movies and mobile-friendly and Chromecast supported features, Attacker.tv is your best alternative to cable and paid streaming services.<br/> 
free movies streaming, watch movies online free, full hd movies stream, full hd series stream, movie streaming online, watch hd series online, hd movie streaming, hd movies online, watch new movies online free, stream movies online free, reddit watch movies free, watch movies online free streaming, watch movies online free hd</p>
      <div className="grid gap-5 grid-cols-2 md:grid-cols-4 xl:grid-cols-8  px-10">
        {movies?.map((movie)=>(
            <div className="flex flex-col items-center  justify-start" key={movie._id} >
                <p className="absolute border bg-white ml-[100px] px-1 mt-3 rounded-md uppercase roboto-bold ">hd</p>
                <img className="h-[15rem] rounded-xl" src={movie?.poster ? movie?.poster : "https://img.freepik.com/premium-vector/unavailable-movie-icon-no-video-bad-record-symbol_883533-431.jpg"} alt="" />
                <div>
                    <p className="text-[15px] flex flex-wrap">{movie.title}</p>
                    <div className="flex text-[14px] justify-between w-full"> 
                        <p className="h-5 ">{movie.year} &#x2022; {movie.runtime}min</p>
                        <span className="border border-grey-500  items-center flex px-[3px] rounded ml-2 ">Movie</span>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
