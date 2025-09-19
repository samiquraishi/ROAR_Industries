import { FC } from "react";
import lionicon from "@/assets/images/lion_logo.png";
import Image from "next/image";

const Intro: FC = () => {
  return (
    <section className=" -mt-10 md:mt-0 pb-14">
      <div className="md:container mx-auto px-4">
        <div className="md:hidden">
          <Image src = {lionicon} alt="Lion Logo" className="mx-auto mb-4 w-16 h-16" />          
        </div>
        <div className="px-3 sm:px-8 md:px-0 grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-16 md:items-end">
          {/* Heading Column - 4/10 ratio on medium+ */}
          <div className="md:col-span-4">
            <h1 className="font-semibold md:font-normal text-center md:text-left text-[2.2rem] sm:text-[2.4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem] leading-tight">
              Why choose us?
            </h1>
          </div>

          {/* Paragraph Column - 6/10 ratio on medium+ */}
          <div
            className="md:col-span-6 bg-white p-5 xl:p-8 "
            style={{
              boxShadow:
                "0 0 5px rgba(255, 196, 0, 0.4), 0 0 15px rgba(255, 179, 0, 0.3), 0 0 40px rgba(255, 119, 0, 0.2)",
            }}
          >
            <p className="text-center md:text-left font-medium text-base sm:text-md md:text-md lg:text-lg xl:text-xl leading-relaxed md:leading-relaxed lg:leading-loose xl:leading-loose">
              At{" "}
              <span className="font-bold bg-gradient-to-r from-[#ffc400] via-[#ffb300] to-[#ff7700] bg-clip-text text-transparent">
                ROAR INDUSTRIES
              </span>
              , we empower businesses to grow smarter and faster. With
              innovative technology, bold marketing strategies, and expert brand
              management, we provide everything you need to stand out in
              today&apos;s competitive market. One partner, one vision{" "}
              <span className="font-bold bg-gradient-to-r from-[#ffc400] via-[#ffb300] to-[#ff7700] bg-clip-text text-transparent">
                ALL UNDER ONE ROOF
              </span>{" "}
              for your success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
