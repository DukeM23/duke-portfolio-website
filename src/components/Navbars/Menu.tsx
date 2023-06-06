import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Menu() {
    return (
      <nav className="my-10">
        <div className="flex justify-between text-3xl font-roboto text-secondary">
          <ul className="flex space-x-5">
            <li>About Me</li>
            <li>Projects</li>
            <li>Contacts</li>
          </ul>
          <ul className="flex space-x-5">
            {[faGithub, faLinkedin, faEnvelope].map((icon, idx) => (
              <li key={idx}>
                <FontAwesomeIcon icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}