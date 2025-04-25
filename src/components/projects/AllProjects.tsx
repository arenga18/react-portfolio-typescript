import INFO from "../../data/user";
import Project from "./Project";
import "./styles/allProjects.css";

export default function AllProjects() {
  return (
    <div className="relative">
      {/* Mobile: Horizontal scroll */}
      <div className="md:hidden">
        <div className="flex overflow-x-auto space-x-4 hide-scrollbar">
          {INFO.projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 w-[80vw]">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden md:block">
        <div className="flex flex-wrap mx-[-35px] py-[30px]">
          {INFO.projects.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-2.5">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
