import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import SideBar from "./SideBar";

export default function Menu() {

  const contacts = [
    {
      url: "https://github.com/DukeM23",
      icon: faGithub,
    },
    {
      url: "https://www.linkedin.com/in/duke-maquiling-37997813a/",
      icon: faLinkedin,
    },
  ];

    return (
      <nav className="pt-20">
        <div className="block sm:hidden">
          <SideBar />
        </div>
        <div className="hidden sm:flex flex-wrap justify-between gap-x-10 sm:gap-y-8 items-center nav-link">
          {/* <div className="flex items-center space-x-10"> */}
          <a href="/">
            <h3
              id="home"
              className="text-secondary-200 font-semibold text-4xl "
            >
              Duke Maquiling
            </h3>
          </a>
          <div className="flex space-x-10">
            <a
              href="#intro"
              className="my-auto transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
            >
              Home
            </a>
            <a
              href="#about-me"
              className="my-auto transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="my-auto transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="my-auto transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-3"
            >
              Contact
            </a>
          </div>
          {/* </div> */}
          {/* <ul className="flex items-center space-x-5">
            {contacts.map(({ url, icon }, idx) => (
              <li key={idx}>
                <a href={url} target="_blank">
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:dukemaquiling@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    );
}