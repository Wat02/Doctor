import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function MobileNav() {
  return (
    <section className="w-full max-w-[370px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/hamburger.svg"
            width={50}
            height={50}
            alt="Logo"
          />
        </SheetTrigger>
        <SheetContent className="bg-[#272626]">
          <SheetHeader>
            <Image
              src="/assets/icons/logo-full.svg"
              width={1000}
              height={1000}
              alt="Logo"
              className="mt-5 w-fit"
            />
            <SheetTitle>
              <p className="flex gap-4 items-center p-2 rounded-lg w-full max-w-60 pt-[50px]">
                About us
              </p>
            </SheetTitle>
            <SheetTitle>
              {" "}
              <p className="flex gap-4 items-center p-2 rounded-lg w-full max-w-60">
                How to contantct us
              </p>
            </SheetTitle>
            <SheetTitle>
              {" "}
              <p className="flex gap-4 items-center p-2 rounded-lg w-full max-w-60">
                Our Doctors
              </p>
            </SheetTitle>

            <SheetDescription>
              <Link href="/registers">
                <Button className=" bg-[#23AD7C] text-[#FFFFFF] pl-[30px] pr-[30px] text-[18px]  mt-5 flex gap-4 items-center p-2 rounded-lg w-full max-w-60">
                  Login
                </Button>
              </Link>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNav;
