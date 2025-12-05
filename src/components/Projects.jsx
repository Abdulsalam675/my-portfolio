import { projectData } from "../projectsData/projectData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-20 w-full animate-in">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="px-4 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            My Projects
          </h2>
          <p className="text-[1.1rem] sm:text-[1.2rem] text-gray-500 ">
            Here&apos;s a selection of my recent work and side projects.
          </p>
        </div>

        {/* Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 sm:mt-16">
          {projectData.map((data) => (
            <ProjectCard data={data} key={data.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
