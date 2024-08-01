import React from "react";

function About() {
  return (
    <section className="pt-[100px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4">
            <p className="pt-[0px] md:pt-[150px] pb-[20px] text-[30px]">
              About us
            </p>
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="pb-[10px] text-[30px]">Care plus</p>
            <p className="bg-gradient-to-r from-[#D1E8FA] to-[#B090F4]  inline-block text-transparent bg-clip-text text-[20px] md:text-[40px] font-semibold tracking-wider">
              We have a team of licensed <br /> healthcare professionals who{" "}
              <br />
              are passionate about providing <br />
              high-quality care through <br />
              telemedicine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
