import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PunPun from "../../assets/punpun.png"

export default function LetsTalk() {
    return (
      <div className="grid grid-cols-2 place-items-center py-52 font-roboto text-secondary ">
        <section className="flex flex-col space-y-5">
          <h1>Let's talk!</h1>
          <div className="flex flex-col space-y-8 text-2xl">
            <p>
              I'm open to exploring new opportunities, but if you wanted to ask
              a question or have a friendly conversation, don't be afraid to
              drop me a message!
            </p>
            <div className="flex justify-between">
              <p>dukemaquiling@gmail.com</p>
              <ul className="flex space-x-5 text-3xl">
                {[faGithub, faLinkedin, faEnvelope].map((icon, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon icon={icon} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div>
          <img
            src={PunPun}
            className="animate-float"
          />
        </div>
      </div>
    ); 
}