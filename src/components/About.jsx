import { skillsData } from "../projectsData/projectData";

function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-20 w-full bg-secondary/50 animate-in"
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl text-gray-900 font-bold mb-4">
            About Me
          </h2>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-gray-500 ">
            Here you&apos;ll find more information about me, my skills, and what
            I do.
          </p>
        </div>

        <div className="text-left grid grid-cols-1 gap-7 mt-14">
          <div className="max-w-xl space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Get to know me!
            </h2>
            {/* Intro  */}
            <div className="space-y-3 text-sm sm:text-[0.93rem] md:text-[0.95rem] text-gray-500">
              <p>
                I&apos;m a passionate Frontend developer with 2 years of
                experience building responsive, high performance websites and
                web applications.
              </p>
              <p>
                I specialize in crafting mobile-first interfaces and bringing
                designs to life with clean, maintainable code.
              </p>
            </div>

            {/* Skills Grid  */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2 text-sm sm:text-[0.93rem] md:text-[0.95rem] text-gray-700">
                {skillsData.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="py-3">
              <p className="text-sm sm:text-[0.93rem] md:text-[0.95rem] text-gray-500">
                I&apos;m open to new opportunities where I can contribute,
                learn, and grow. If you have a good opportunity that matches my
                skills, feel free to contact me.
              </p>
            </div>
            <div>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-white text-sm bg-indigo-500 hover:bg-indigo-400 transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
