import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className=" pt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-9">
            <p className="text-[20px] md:text-[30px] bg-gradient-to-r from-[#80C3E7] to-[#E2D3FC]  inline-block text-transparent bg-clip-text pb-[20px] ">
              <span className="">connect,</span> consult and{" "}
              <span className="">care remotely</span>
            </p>
            <h1 className="text-[35px] md:text-[65px] font-semibold tracking-wide">
              Get higt-quality <br />
              service with quality <br />
              <span className="bg-gradient-to-r from-[#80C3E7] to-[#E2D3FC]  inline-block text-transparent bg-clip-text pb-[20px]">
                {" "}
                telemedicine
              </span>
            </h1>
            <div className="flex pt-[10px]">
              <Image
                src="/assets/images/dr-lee.png"
                height={50}
                width={50}
                alt="dr Lee"
                className="hidden md:flex"
              />
              <p className="ml-[0px] md:ml-[20px]">
                Take control of your Health and experience <br /> the benefits
                of telemedical with our platform.
              </p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-3 pt-[50px]">
            <p className="text-[35px] pb-[15px] font-bold">
              340 <span className="text-[#87CDF5]">+</span>{" "}
            </p>
            <p className="pb-[10px] text-[#FBFBFB]">
              Transform healthcare with <br />
              telemedicine. Connect, <br /> consult and care remotely
            </p>
            <h2 className="bg-gradient-to-r from-[#80C3E7] to-[#E2D3FC]  inline-block text-transparent bg-clip-text text-[20px] uppercase font-semibold">
              Time care
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
