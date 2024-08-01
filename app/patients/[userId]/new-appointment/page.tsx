import AppointmentForm from "@/components/Forms/AppointmentForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewAppointment() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Link href="/">
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="patient"
              className="mb-12 h-10 w-fit"
            />
          </Link>
          <AppointmentForm />
          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}

export default NewAppointment;
