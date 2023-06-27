import ProjectA from "./Project"
import { Project } from "../../interface/project.interface"
import MikaelaPortfolio from "../../assets/mikaela-portfolio-website.png"
import Randomify from "../../assets/randonmify-screenshot.png"

export default function Projects() {
    
    const projects: Array<Project> = [
      {
        title: "Mikaela Maquiling's Portfolio",
        url: "https://www.mikaelamaquiling.com/",
        description:
          "A portfolio website showcasing Mikaela Maquiling's work experience and accomplishments.",
        img: MikaelaPortfolio,
        alt: "A scrren shot of Mikaela Maquiling's Portfolio website",
        technologies: ["React", "Tailwind CSS", "Auth0"],
      },
      {
        title: "Randomify",
        url: "https://randomify-silk.vercel.app/#",
        description:
          "A web application allowing the creation of a random playlist using Spotify API.",
        img: Randomify,
        alt: "A scrren shot of Randomify",
        technologies: ["React", "TailwindCSS"],
      },
    ];
    
    return (
      <div id="projects" className="py-52 font-roboto text-secondary-200">
        <h1 className="text-tertiery mb-5">Projects</h1>
        <div className="flex flex-col divide-y divide-solid divide-secondary-200">
          {
            projects.map((project: Project, idx) => (
              <ProjectA key={idx} project={project} />
            ))
          }
        </div>
      </div>
    );
}