import ProjectCard from "./ProjectCard"
import ProjectA from "./Project"
import { Project } from "../../interface/project.interface"
import ITAudit from "../../assets/it-audit-screenshot.png"
import Randomify from "../../assets/randonmify-screenshot.png"

export default function Projects() {
    
    const projects: Array<Project> = [
      {
        title: "IT Audit",
        url: "https://it-audit.vercel.app/dashboard/audit",
        description:
          "Full stack web application for maintaing an audit list of deployed computers.",
        img: ITAudit,
        alt: "A scrren shot of IT Audit web app",
        technologies: ["React", "ExpressJS", "Bootstrap", "MongoDB"],
      },
      {
        title: "Randomify",
        url: "https://randomify-silk.vercel.app/#",
        description:
          "A web application allowing the creation of a random playlist using SPotify API",
        img: Randomify,
        alt: "A scrren shot of Randomify",
        technologies: ["React", "TailwindCSS"],
      },
    ];
    
    return (
      <div id="projects" className="py-52 font-roboto text-secondary">
        <h1 className="text-tertiery">Projects</h1>
        {/* <div className="flex justify-evenly space-x-10 py-32">
            {
                projects.map((project:Project, idx) => <ProjectCard key={idx} project={project}/>)
            }
        </div> */}
        <div className="flex flex-col divide-y-2 divide-solid divide-secondary">
          {projects.map((project: Project, idx) => (
            <ProjectA key={idx} project={project} />
          ))}
        </div>
      </div>
    );
}