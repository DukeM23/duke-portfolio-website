import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PunPun from "../../assets/punpun.png"

export default function LetsTalk() {
  const [ click, setClick ] = useState(0)
  
  const socials = [
    {
      icon: faEnvelope,
      href: "mailto:dukemaquiling@gmail.com",
    },
    {
      icon: faGithub,
      href: "https://github.com/DukeM23",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/duke-maquiling-37997813a/",
    },
  ];

  const handleClick = () => {
    if(click !== 3) {
      setClick((prevState) => prevState + 1)
    } else {
      setClick(0)
    }
  }

    return (
      <div
        id="contact"
        className="grid grid-cols-3 sm:grid-cols-2 sm:place-items-center gap-x-5 py-52 font-roboto text-secondary-200"
      >
        <section className="col-span-2 sm:col-span-1 flex flex-col space-y-5">
          <h1>Let's talk!</h1>
          <div className="flex flex-col space-y-8 text-2xl">
            <p>
              Whether it be something development related or exploring
              opportunities, I'm always happy to have a friendly conversation
              over coffee. Don't be afraid to drop me a message!
            </p>
            <div className="flex flex-wrap gap-y-5 gap-x-10 justify-between">
              {/* <a href="mailto:">dukemaquiling@gmail.com</a> */}
              <ul className="flex gap-x-10 text-4xl lg:text-5xl">
                {socials.map(({ icon, href }, idx) => (
                  <li key={idx}>
                    <a href={href} target="_blank">
                      <FontAwesomeIcon className="drop-shadow-md" icon={icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <div className="place-self-center">
          {/* { click === 3 && <p>Peepooppeepeepeepoopoo</p>} */}
          <img
            src={PunPun}
            className="sm:block animate-float"
            onClick={handleClick}
          />
        </div>
      </div>
    ); 
}