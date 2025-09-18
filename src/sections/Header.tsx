import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md z-50">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/">
              <span className="text-3xl font-medium uppercase text-white ">
                Roar&nbsp; Industries
              </span>
            </a>
          </div>
          <div className="flex gap-4 items-center">
            <div className="size-8 border rounded-full inline-flex items-center justify-center bg-stone-300 transition-transform duration-300 hover:rotate-[270deg] active:scale-95 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="15" width="18" height="2" fill="currentColor" />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" />
              </svg>
            </div>
            <button className="bg-[#660303] hover:bg-transparent border-[#660303] border-2 h-9 px-5 text-sm text-white  hidden md:inline-flex items-center transition-all duration-200 active:scale-95">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
