import projects from "../mocks/projects";
import Project from "./Project";

export default function ProjectsPage() {
  return (
    <section id="projects">
      <div className="max-w-4xl mx-auto text-3xl font-bold text-slate-300 md:my-14 mt-10 mb-5">
        <h1 className="text-center md:text-left">
          Projects <span className="text-project-green">...</span>
        </h1>
      </div>
      <div className="max-w-5xl mx-auto">
        <ul className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-8 md:p-0 p-10">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}
