import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Project } from "../../interface/project.interface"
import Technology from "./Technology";

export default function ProjectA({ project }: { project: Project }) {
  const { title, url, description, img, alt, technologies } = project

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-x-10 py-10 gap-y-8">
      <div className="flex flex-col gap-y-8">
        <a href={url} target="_blank">
          <img src={img} alt={alt} className="ming-h-min rounded-lg" />
        </a>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {technologies.map((technology: string, idx) => (
            <Technology key={idx} technology={technology} />
          ))}
        </div>
      </div>
      <div className="flex flex-col space-y-6">
        <a
          href={url}
          className="transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
          target="_blank"
        >
          <h3>{title}</h3>
        </a>
        <p>{description}</p>
        <span className="see-more flex items-center w-fit gap-x-3 text-lg sm:text-2xl font-roboto font-semibold">
          <a
            href={url}
            target="_target"
            className="transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
          >
            See More
          </a>
          <FontAwesomeIcon icon={faArrowRightLong} className="see-more-arrow" />
        </span>
      </div>
    </div>
  );
}