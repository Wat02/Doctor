import Image from "next/image";
import React from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Nav() {
  return (
    <nav className="pt-[15px]">
      <div className="container mx-auto fixed hidden md:block">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-10 ">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="Logo"
              className="mt-5 h-10 w-fit"
            />
          </div>
          <div className="col-span-2">
            <Link href="/registers">
              <button className=" bg-[#23AD7C] pl-[30px] pr-[30px] pt-[10px]  pb-[10px] rounded-lg  text-[18px] mt-5">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-end  block md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
}

export default Nav;
