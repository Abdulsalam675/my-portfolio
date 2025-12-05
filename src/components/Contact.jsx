import { HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import ContactIcons from "./ContactIcons";
import { HiOutlinePhone } from "react-icons/hi";

function Contact() {
  return (
    <section
      id="contact"
      className="py-12 sm:py-20 w-full bg-secondary/50 animate-in"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-gray-900 font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-gray-500 ">
            Feel free to contact me for any work or suggestions.
          </p>
        </div>
        <div class="flex flex-col gap-6">
          <h1 class="text-lg sm:text-2xl font-semibold text-gray-800">
            Contact Info
          </h1>
          <div class="flex items-center gap-4">
            <div class="p-2.5 sm:p-3 rounded-full bg-blue-100">
              <HiOutlineEnvelope size={25} className="text-indigo-600" />
            </div>
            <div>
              <p class="font-semibold text-sm sm:text-[0.95rem] text-gray-900">
                Email
              </p>
              <a
                href="mailto:abdulsalamumoru2007@gmail.com"
                class="text-sm sm:text-[0.95rem]  text-gray-600 hover:text-indigo-500 underline"
              >
                abdulsalamumoru2007@gmail.com
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="p-2.5 sm:p-3 rounded-full bg-blue-100">
              <HiOutlinePhone size={25} className="text-indigo-600" />
            </div>
            <div>
              <p class="font-semibold text-sm sm:text-[0.95rem] text-gray-900">
                Phone
              </p>
              <a
                href="tel:+2347030521327"
                class="text-sm sm:text-[0.95rem]  text-gray-600 hover:text-indigo-500 underline"
              >
                +2347030521327
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="p-2.5 sm:p-3 rounded-full bg-blue-100">
              <HiOutlineMapPin size={25} className="text-indigo-600" />
            </div>
            <div>
              <p class="font-semibold text-sm sm:text-[0.95rem] text-gray-900">
                Location
              </p>
              <p class="text-sm sm:text-[0.95rem]  text-gray-600">
                Minna, Niger State
              </p>
            </div>
          </div>
          <div>
            <h3 class="text-lg  font-semibold mb-3 text-gray-800 mt-3">
              Connect With Me
            </h3>
            <ContactIcons />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
