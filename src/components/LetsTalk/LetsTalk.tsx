import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
import PunPun from "../../assets/punpun.png"
import { Social } from "../../interface/social.interface";

export default function LetsTalk() {
  
  const socials:Array<Social> = [
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

    return (
      <section
        id="contact"
        className="grid grid-cols-3 sm:grid-cols-2 sm:place-items-center gap-x-5 py-52 font-roboto text-secondary-200"
      >
        <div className="col-span-2 sm:col-span-1 flex flex-col space-y-5">
          <h1>Let's talk!</h1>
          <div className="flex flex-col space-y-8 text-2xl">
            <p>
              Whether it be something development related or exploring
              opportunities, I'm always happy to have a friendly conversation
              over coffee. Don't be afraid to drop me a message!
            </p>
            <div className="flex flex-wrap gap-y-5 gap-x-10 justify-between">
              <ul className="flex gap-x-10 text-4xl lg:text-5xl">
                {
                  socials.map(({ icon, href }, idx) => (
                    <li key={idx}>
                      <a href={href} target="_blank">
                        <FontAwesomeIcon className="drop-shadow-md" icon={icon} />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="place-self-center">
          <img
            src={PunPun}
            className="sm:block animate-float"
            alt="Punpun floating"
          />
        </div>
      </section>
    ); 
}