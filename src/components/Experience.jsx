import { HiOutlineMapPin } from "react-icons/hi2";
import { LuCalendar } from "react-icons/lu";
import { experienceData } from "../projectsData/projectData";
import Education from "./Education";

function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-20 w-full animate-in">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl text-gray-900 font-bold mb-4">
            My Experience
          </h2>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-gray-500 ">
            A summary of my professional journey and accomplishments.
          </p>
        </div>
        <div className="space-y-8 relative">
          {/* Vertical Line Desktop Only  */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

          {experienceData.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div className="animate-in" key={exp.id}>
                <div
                  className={isEven ? "md:flex" : "md:flex md:flex-row-reverse"}
                >
                  <div className="md:w-1/2 md:pl-8 md:pr-12 mb-8 md:mb-0 relative">
                    <div
                      className={
                        "hidden md:block absolute w-2 h-2 rounded-full bg-indigo-500 " +
                        (isEven
                          ? "right-0 transform translate-x-1/2 top-8 z-20 shadow-md"
                          : "left-0 transform -translate-x-1/2 top-8 z-20 shadow-md")
                      }
                    ></div>
                    <div className="rounded-lg border bg-white shadow-sm card-hover h-full md:ml-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex flex-col space-y-1.5 p-6">
                        <div className="flex items-center justify-between mb-1 text-xs md:text-[13px] text-gray-600">
                          <div className="flex items-center">
                            <LuCalendar size={15} />
                            <span>{exp.date}</span>
                          </div>
                          <div className="flex items-center">
                            <HiOutlineMapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold tracking-tight text-xl text-gray-900">
                          {exp.role}
                        </h3>
                        <p className="text-gray-500 text-sm font-semibold md:text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="p-6 pt-0">
                        <p className="mb-4 text-sm md:text-[0.95rem]  text-gray-500">
                          {exp.short}
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-[13.5px] text-gray-500">
                          {exp.bullets.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4 text-sm md:text-[0.95rem] text-gray-700">
                          {exp.skills.map((skill) => (
                            <div
                              key={skill}
                              className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-gray-100"
                            >
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            );
          })}
        </div>
        <Education />
      </div>
    </section>
  );
}

export default Experience;
