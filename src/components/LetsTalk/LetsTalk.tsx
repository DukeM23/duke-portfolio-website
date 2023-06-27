import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PunPun from "../../assets/punpun.png"

export default function LetsTalk() {
  const [ click, setClick ] = useState(0)
  
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
        className="grid grid-cols-3 sm:grid-cols-2 sm:place-items-center py-52 font-roboto text-secondary-200"
      >
        <section className="col-span-2 sm:col-span-1 flex flex-col space-y-5">
          <h1>Let's talk!</h1>
          <div className="flex flex-col space-y-8 text-2xl">
            <p>
              I'm open to exploring new opportunities, but if you wanted to ask
              a question or have a friendly conversation, don't be afraid to
              drop me a message!
            </p>
            <div className="flex flex-wrap space-y-5 justify-between">
              <p>dukemaquiling@gmail.com</p>
              <ul className="flex space-x-5 text-3xl">
                {
                  [faGithub, faLinkedin, faEnvelope].map((icon, idx) => (
                    <li key={idx}>
                      <FontAwesomeIcon icon={icon} />
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>
        <div className="place-self-center">
          {/* { click === 3 && <p>Peepooppeepeepeepoopoo</p>} */}
          <img src={PunPun} className="sm:block animate-float" onClick={handleClick}/>
        </div>
      </div>
    ); 
}