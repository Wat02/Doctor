import Image from "next/image";
import React from "react";

function Doctors() {
  return (
    <section className="pt-[100px]">
      <div className="container mx-auto bg-[#272626] rounded-[30px] pt-[50px] pb-[50px]">
        <p>Get hight quality service with our telemeducal services</p>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12">
            <h1 className="text-[35px] md:text-[50px] pb-[30px] pt-[10px] font-semibold tracking-wide	">
              You can find the best doctor and <br /> specialist and nurse like
              you need.
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Image
              src="/assets/images/dr-sampoa.png"
              width={1000}
              height={1000}
              alt="slika"
            />
            <h3 className="pt-[15px]  text-[25px]">Dr-Sampoa Pogueq</h3>
            <p className=" text-[18px] pb-[50px] md:pb-[0px]">Dermatologist</p>
          </div>
          <div className="col-span-12 md:col-span-4 pt-[10px]">
            <Image
              src="/assets/images/dr-rafael.png"
              width={400}
              height={400}
              alt="slika"
            />
            <h3 className="pt-[15px] text-[25px]">Dr-Rafael Simsito</h3>
            <p className=" text-[18px]  pb-[50px] md:pb-[0px]">Orthopedist</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Image
              src="/assets/images/dr-sarah.png"
              width={1000}
              height={1000}
              alt="slika"
            />
            <h3 className="pt-[15px] text-[25px]">Dr-Sarah Simsito</h3>
            <p className=" text-[18px]  pb-[50px] md:pb-[0px]">Psychiatrist</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
