import SideBar from "./SideBar";

export default function Menu() {

    return (
      <nav className="pt-20">
        <div className="block sm:hidden">
          <SideBar />
        </div>
        <div className="hidden sm:flex flex-wrap justify-between gap-x-10 sm:gap-y-8 items-center nav-link">
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
        </div>
      </nav>
    );
}