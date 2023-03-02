import React from "react";
import Image from "next/image";
import Button from "../components/Button";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const Login = () => {
  return (
    <div
      className={`${nunito.className} lg:grid  grid-cols-2 max-w-screen-2xl h-screen  lg:pt-0 pt-8`}
    >
      {/* h-2/5 lg:3/4 md:3/4  */}
      <div className="flex justify-center  lg:mt-0">
        <Image width={600} height={377} alt="login" src="/loginImg.svg" />
      </div>
      <div className=" lg:mt-0 mt-8 pl-12 md:pl-20 lg:pl-20 flex flex-col justify-center">
        <h2 className="w-48 h-14  lg:h-14 font-bold md:text-5xl md:h-16 text-4xl lg:text-4xl -tracking-wider text-darkBlue ">
          Welcome!
        </h2>
        <p className="text-lightBlue w-52 lg:w-52 h-7  lg:text-xl text-xl md:text-2xl md:w-60 leading-7 font-normal -mt-2.5">
          Enter details to Login
        </p>
        <form action="" className="">
          <input
            type="text"
            placeholder="Email"
            className="h-12 lg:h-12 lg:text-xs md:h-20 md:text-xl  block border-2 border-greyash w-4/5 lg:w-96 text-xs pl-4 rounded-md mb-6 mt-10 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Password"
            className="h-12 lg:h-12 lg:text-xs md:h-20 md:text-xl block border-2 border-greyash w-4/5 lg:w-96 text-xs pl-4 rounded-md mb-6 focus:outline-none"
          />
          <p className="text-blue w-40 h-4 lg:w-40 lg:h-4 lg:text-xs md:text-lg md:h-6 md:w-80 text-xs font-semibold tracking-widest mb-7">
            FORGOT PASSWORD?
          </p>
          <Button
            type="button"
            title="Log in"
            className="bg-blue lg:h-12 lg:text-sm md:h-20 md:text-xl lg:w-96  w-4/5 h-12 rounded-lg font-semibold text-sm leading-5 tracking-widest text-white uppercase"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
