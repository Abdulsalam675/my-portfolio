import { HiOutlineMapPin } from "react-icons/hi2";
import { LuCalendar } from "react-icons/lu";
import { educationData } from "../projectsData/projectData";

function Education() {
  return (
    <section>
      <div className="mt-20 sm:mt-24 animate-in">
        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">
          Education
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((data) => (
            <div key={data.id} className="animate-in">
              <div className="rounded-lg border bg-white shadow-sm card-hover hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="flex items-center justify-between mb-1 text-xs md:text-[13px] text-gray-600">
                    <div className="flex items-center gap-1">
                      <LuCalendar size={15} />
                      <span>{data.date}</span>
                    </div>
                    <div className="flex items-center">
                      <HiOutlineMapPin size={16} />
                      <span>{data.location}</span>
                    </div>
                  </div>
                  <h3 className="font-bold tracking-tight text-lg sm:text-xl text-gray-800">
                    {data.degree}
                    {data.id === 1 && (
                      <span className="font-medium text-sm text-gray-600 px-1">
                        (In view)
                      </span>
                    )}
                  </h3>
                  <p className="text-sm font-medium text-gray-700">
                    {data.institution}
                  </p>
                </div>

                <div className="p-6 pt-0">
                  <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-500">
                    {data.short}
                    <br />
                    <br />
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
