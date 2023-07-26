export default function Footer() {
  return (
    <footer className="pb-5 font-roboto text-secondary-200 text-xl">
      <ul className="flex gap-x-5">
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#about-me">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            download
            target="_blank"
            rel="noopener noreferrer"
            href="/src/assets/Duke-Maquiling-Resume.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </footer>
  );
}
