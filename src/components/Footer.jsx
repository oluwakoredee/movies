/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="xl:flex pt-8 justify-between text-[13px] h-full pb-4 gap-20 bg-white xl:pb-20">
      <div className="flex flex-col gap-3 items-center">
        <img className="hidden lg:flex xl:flex h-10 p" src={logo} alt="" />
        <p className="h-3 pl-20 hidden lg:flex xl:flex  ">Attacker.tv</p>
      </div>
      <div className="flex flex-col px-10 gap-4">
        <p className="">
        Attacker.tv is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from Attacker.tv and watch it later if you want. 
        </p>
        <p>
            Android App  -  Terms of services  - contact - sitemap - Faq - 9anime 
        </p>
      </div>
      <div className="border my-4 roboto-thin xl:w-[750px] xl:h-[60px] xl:pl-3 bg-gray-50 mr-5 xl:text-left xl:items-start xl:p-2 ml-5 ">
        <p>
        Attacker.tv does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
        </p>
      </div>
      <p className="md:hidden ml-5">Attacker.tv</p>
    </div>
  );
};

export default Footer;
