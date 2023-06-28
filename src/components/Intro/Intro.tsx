import DukeHeadshot from '../../assets/duke-intro.png'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {
    return (
      <div
        id="intro"
        className="py-52 sm:grid grid-cols-1 md:grid-cols-2 gap-x-10"
      >
        <div className="my-auto">
          <section className="flex flex-col space-y-10 text-secondary-200">
            <img
              src={DukeHeadshot}
              alt="A picture of Duke"
              className="block md:hidden rounded-lg shadow-md w-5/6 mx-auto"
            />
            <h1>Hi, I'm Duke!</h1>
            <div className="text-3xl flex flex-col space-y-5">
              <p>
                I'm a Frontend Developer that transforms ideas into interactive
                and responsive websites.
              </p>
            </div>
            <span
              id="project-link"
              className="text-xl sm:text-2xl inline-block"
            >
              <a
                href="#projects"
                className="transition-colors duration-500 underline decoration-transparent ease-in-out hover:decoration-secondary-200 hover:underline hover:underline-offset-4"
              >
                See my projects below
              </a>
              <FontAwesomeIcon
                id="down-arrow"
                className="justify-start ml-3 animate-float-1"
                icon={faArrowDown}
              />
            </span>
          </section>
        </div>
        <img
          src={DukeHeadshot}
          alt="A picture of Duke"
          className="hidden md:block place-self-center rounded-lg shadow-md"
        />
      </div>
    );
}