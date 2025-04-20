import INFO from "../../data/user";
import Project from "./Project";
import "./styles/AllProjects.css";

export default function AllProjects() {
  return (
    <div className="flex flex-wrap items-stretch py-[30px] mx-[-35px]">
      {INFO.projects.map((project) => (
        <div className="w-1/2 md:w-1/3 p-2.5 overflow-hidden">
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}
