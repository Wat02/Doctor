import Image from "next/image";
import React from "react";
import photo1 from "@/public/assets/images/photo1.png";

function Calls() {
  return (
    <section className="pt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-6 pb-[20px]">
            <Image
              src={photo1}
              height={500}
              width={500}
              alt="virtual consulation"
            />
          </div>
          <div className="col-span-12 md:col-span-6 pt-[10px]">
            <h1 className="pb-[20px] pt-[50px] hidden md:flex">1</h1>
            <h3 className="pb-[10px] text-[40px] font-semibold	">
              Virtual Consulation
            </h3>
            <p className="pb-[30px] text-[18px] ">
              Pations can connect with healthcare providers for <br />{" "}
              consulatation from the confort of there own homes, <br />
              without having to travel to an office or clinic
            </p>
          </div>
          <div className="col-span-12 md:col-span-6  pb-[20px] md:pb-[10px]  pt-[50px] md:pt-[10px]">
            <Image
              src="/assets/images/numbers.png"
              height={500}
              width={500}
              alt="Number"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <h1 className="hidden md:flex">2</h1>
            <h2 className="pb-[10px] text-[40px] font-semibold pt-[10px]">
              Remote patient monitoring
            </h2>
            <p className="text-[18px] pb-[50px] md:pb-[0px]">
              Patint can use wearables or devices to connect and send health
              data <br /> to healthcare provides for monitoring
            </p>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Image
              src="/assets/images/face.png"
              height={500}
              width={500}
              alt="Number"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <p>3</p>
            <h2 className="text-[25px] md:text-[35px] font-semibold">
              Mental health services such <br />
              counseling sessions
              <span className="text-[#868686]">
                with <br /> licensed therapists or <br /> psychiatrists
              </span>
            </h2>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}

export default Calls;
