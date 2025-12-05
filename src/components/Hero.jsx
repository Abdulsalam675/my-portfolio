import ContactIcons from "./ContactIcons";

function Hero() {
  return (
    <header className="h-screen w-full">
      <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-1 md:grid-cols-5 gap-8 items-center px-4 sm:px-6 md:px-8 py-16 lg:py-20">
        {/* LEFT: Text */}
        <div className="md:col-span-3 space-y-5 md:pt-14">
          <h2 className="text-[1.38rem] md:text-3xl lg:text-4xl font-medium text-gray-500 heroTitle">
            Front-End Developer
          </h2>
          <div className="space-y-6 heroSubtitle">
            <p className="text-[1.03rem] sm:text-[1.08rem] max-w-xl text-gray-500 ">
              I'm a passionate Front-End Developer who builds professional,
              fully responsive websites and web applications with a focus on
              performance, accessibility, and modern design.
            </p>
            <div className="flex flex-wrap gap-4 py-4">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition duration-300 rounded-lg px-7 py-3.5"
              >
                Resume / CV
              </a>
            </div>
            <ContactIcons />
          </div>
        </div>

        {/* RIGHT: Image / Content */}
        <div className="md:col-span-2 flex justify-center md:justify-end sm:pt-6 lg:pt-14">
          {/* Replace this with your actual image */}
          <div className="w-56 h-56 md:w-80 md:h-80 bg-gradient-to-br from-indigo-300 to-indigo-500 overflow-hidden p-1 shadow-lg rounded-full heroImage">
            <img
              src="./abdulsalam.jpg"
              alt="Abdulsalam Umoru"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
