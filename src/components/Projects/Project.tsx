import { Project } from "../../interface/project.interface"
import Technology from "./Technology";

export default function ProjectA({ project }: { project: Project }) {
    const { title, url, description, img, alt, technologies } = project;

    return (
      <div className="grid grid-cols-2 gap-x-8 py-10">
        <a href={url} target="_blank">
          <img src={img} alt={alt} className="rounded-lg h-full" />
        </a>
        <div className="place-self-center">
          <section className="flex flex-col space-y-5">
            <h3 className="text-3xl text-tertiery">{title}</h3>
            <p className="text-xl">{description}</p>
            <div className="flex gap-x-2">
              {technologies.map((technology: string, idx) => (
                <Technology key={idx} technology={technology} />
              ))}
            </div>
          </section>
        </div>
      </div>
    );
}