import Link from "next/link";
import { FC } from "react";

const navItems = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "Services",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact us",
  },
  {
    href: "#",
    label: "Social Media links",
  },
];

const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="py-24 md:py-32 lg:y-40 ">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-500"></div>
            <span className="uppercase">Let's connect to work with us.</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl lg:text-8xl  mt-8 font-extralight">
                Take this <span className="  bg-gradient-to-r from-[#ffc400] via-[#ffb300] to-[#ff7700] bg-clip-text text-transparent">opportunity</span> and grow your business.
              </h2>

              <button className=" mt-8 items-center gap-2 bg-transparent border-[#660303] border-2 hover:border-0 h-11 px-7 inline-flex transition-all duration-200 active:scale-95">
                roarindustries.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </button>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({ href, label }) => (
                  <Link href="{href}" key={label}>
                    <button className="uppercase text-md ">{label}</button>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <p className="py-8 text-white/30 text-sm text-center border-t border-stone-700">
          © Roar Industries &nbsp; &bull; &nbsp; All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
