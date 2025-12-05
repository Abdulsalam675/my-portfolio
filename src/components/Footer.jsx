import { FiArrowUp } from "react-icons/fi";
import ContactIcons from "./ContactIcons";

function Footer() {
  return (
    <footer id="contact" className=" bg-secondary w-full py-12 ">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8 animate-in">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3 items-center justify-between space-y-2">
          <div class="text-center md:text-left flex flex-col space-y-2">
            <h3 class="text-lg md:text-xl font-semibold text-gray-800">
              Abdulsalam Umoru
            </h3>
            <span class="text-sm text-gray-600">Front-End Developer</span>
          </div>
          <div className="flex items-center justify-center">
            <ContactIcons />
          </div>

          <div class="text-center md:text-right ">
            <a
              href="#"
              className="text-white p-3 rounded-full inline-flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 transition duration-300"
            >
              <FiArrowUp size={20} />
            </a>
          </div>
        </div>
        <div class="border-t border-gray-200 mt-8 pt-8 space-y-1 text-center text-gray-500">
          <p class="text-[0.9rem] sm:text-[0.95rem]">
            © {new Date().getFullYear()} Abdulsalam Umoru. All Rights Reserved.
          </p>
          <p class="text-xs sm:text-sm ">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
