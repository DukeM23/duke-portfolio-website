import { Project } from "../../interface/project.interface"
import Technology from "./Technology"

export default function ProjectCard({ project }: { project:Project }) {
    const {
        title, 
        url,
        description,
        img,
        alt,
        technologies
    } = project
    
    return (
      <div className="flex flex-col text-secondary-200">
        <a href={url} target="_blank">
          <img src={img} alt={alt} className="rounded-t-lg" />
        </a>
        <div className="bg-white rounded-b-lg">
          <section className="p-5">
            <h3 className="mb-5">{title}</h3>
            <p>{description}</p>
            <div className="mt-5 flex flex-wrap space-x-3">
              {
                technologies.map((technology: string, idx) => (
                    <Technology key={idx} technology={technology} />
                ))
              }
            </div>
          </section>
        </div>
      </div>
    );
}