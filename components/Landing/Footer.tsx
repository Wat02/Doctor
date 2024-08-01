import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <section className="pb-[30px] pt-[50px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-12 pt-[20px]">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="Logo"
              className="mt-5 h-10 w-fit mb-[20px]"
            />
            <p className="pb-[20px] text-[20px]">
              Transforming HealthCare with Telemedical. Connect, Consult and
              Care Remotly
            </p>
          </div>
          <div className="col-span-12  md:col-span-12">
            <p className="text-[30px] bg-gradient-to-r from-[#80C3E7] to-[#E2D3FC]  inline-block text-transparent bg-clip-text">
              say@CarePlus.com
            </p>
          </div>
          <div className="col-span-12  md:col-span-2 pt-[30px]">
            <p className="text-[18px]">Erhah Beeranth 128,</p>
            <p className="text-[18px]">620018 Antwep</p>
            <p className="text-[18px]">Ausy</p>
          </div>
          <div className="col-span-12  md:col-span-2  pt-[30px]">
            <p className="text-[18px]">2018Erhah Beeranth </p>
            <p className="text-[18px]">+ 32 433 434 98</p>
            <p className="text-[18px]">say@Hello.com</p>
          </div>
          <div className="col-span-12  md:col-span-3  pt-[30px]">
            <p className="text-[18px]">Contact us</p>
            <p className="text-[18px]">Privacy & Policy</p>
            <p className="text-[18px]">Term to use</p>
          </div>
          <div className="col-span-12  md:col-span-2  pt-[30px]">
            <p className="text-[18px]">About us</p>
            <p className="text-[18px]">F&Qs</p>
            <p className="text-[18px]">Blog</p>
          </div>
          <div className="col-span-12  md:col-span-2  pt-[30px]">
            <p className="text-[18px]">From us</p>
            <p className="text-[18px]">Disclamer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
