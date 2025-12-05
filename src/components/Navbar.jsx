import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import useShowOnScroll from "../Hooks/useShowOnScroll";

function Navbar() {
  // CUSTOM HOOK TO LISTEN FOR WINDOW SCROLL EVENT
  const showBorder = useShowOnScroll(10);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={` background/80 backdrop-blur-md z-50 fixed top-0 left-0 right-0 h-14 md:h-16 w-full transition-all duration-300 ${
        showBorder ? "shadow-sm" : ""
      }`}
    >
      {/* DESKTOP VIEW */}
      <div className=" max-w-7xl mx-auto h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
        <div>
          <a href="#" className="text-indigo-600 text-xl font-semibold">
            Abdulsalam&lt;/&gt;
          </a>
        </div>
        <div>
          <ul className="hidden md:flex items-center space-x-8 text-[0.94rem]">
            <a
              href="#about"
              className="text-gray-800 hover:text-indigo-500 trasition"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-800 hover:text-indigo-500 trasition"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-800 hover:text-indigo-500 trasition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-indigo-500 trasition"
            >
              Contact
            </a>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-800 text-[0.9rem] px-4 py-1.5 border border-gray-200 rounded-lg hover:bg-indigo-500 hover:text-white hover:border-indigo-400 transition duration-300"
            >
              Resume
            </a>
          </ul>
          <div className="h-full flex justify-center items-center md:hidden text-gray-900">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <RxCross2 size={23} /> : <RxHamburgerMenu size={23} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      {isOpen && (
        <ul
          className={`background flex flex-col space-y-3 px-4 pb-3 text-sm sm:text-[0.9rem] text-gray-700 md:hidden ${
            showBorder ? "shadow-sm" : ""
          }`}
        >
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 sm:px-4 sm:py-2.5  hover:text-indigo-600 hover:bg-gray-100 transition rounded-lg"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 sm:px-4 sm:py-2.5  hover:text-indigo-600 hover:bg-gray-100 transition rounded-lg"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 sm:px-4 sm:py-2.5  hover:text-indigo-600 hover:bg-gray-100 transition rounded-lg"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 sm:px-4 sm:py-2.5  hover:text-indigo-600 hover:bg-gray-100 transition rounded-lg"
          >
            Contact
          </a>
          <div className=" px-3 ">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 sm:px-4 py-1.5 border border-gray-300 rounded-lg hover:bg-indigo-500 hover:text-white hover:border-indigo-400 transition duration-300"
            >
              Resume
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
