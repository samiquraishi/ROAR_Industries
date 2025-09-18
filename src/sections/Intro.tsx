import { FC } from "react";

const Intro: FC = () => {
  return (
    <section className="py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12 md:items-end">
      
      {/* Heading Column - 4/10 ratio on medium+ */}
      <div className="md:col-span-4">
        <h1 className="font-semibold md:font-normal text-center md:text-left text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem] leading-tight">
          Why choose us?
        </h1>
      </div>
      
      {/* Paragraph Column - 6/10 ratio on medium+ */}
      <div className="md:col-span-6">
        <p className="text-center md:text-left font-medium text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-relaxed md:leading-relaxed lg:leading-loose xl:leading-loose">
          At{" "}
          <span className="font-bold bg-gradient-to-r from-[#ffc400] via-[#ffb300] to-[#ff7700] bg-clip-text text-transparent">
            ROAR INDUSTRIES
          </span>
          , we empower businesses to grow smarter and faster. With innovative
          technology, bold marketing strategies, and expert brand management,
          we provide everything you need to stand out in today&apos;s
          competitive market. One partner, one vision{" "}
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
