import React from "react";
import Image from "next/image";
import RegisterForm from "@/components/Forms/RegisterForm";
import Link from "next/link";

function page() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="emove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />
          </Link>
          <RegisterForm />
          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}

export default page;
