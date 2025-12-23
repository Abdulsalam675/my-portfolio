import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ data }) {
  return (
    <div className="bg-white rounded-lg border animate-in shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full max-w-sm mx-auto overflow-hidden border w-full">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          loading="lazy"
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="py-6 px-4 flex flex-col flex-grow border-t border-gray-200">
        <h3 className="text-[1.23rem] font-semibold mb-2 text-gray-800">
          {data.title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {data.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-500 mb-4 text-sm sm:text-[15px] flex-grow">
          {data.subTitle}
        </p>

        <div className="mt-auto space-x-4 flex ">
          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 bg-blue-500 text-white/95 text-[0.7rem] sm:text-[0.8rem] font-semibold rounded-lg hover:bg-blue-500/85 transition-colors "
          >
            <FiExternalLink size={16} />
            <span>{data.gitHub ? "Open Web App" : "Visit website"}</span>
          </a>

          {data.gitHub && (
            <a
              href={data.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-2 bg-blue-500 text-white/95 text-[0.7rem] sm:text-[0.8rem] font-semibold rounded-lg hover:bg-blue-500/85 transition-colors "
            >
              <FiExternalLink size={16} />
              <span>Github Repository</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
