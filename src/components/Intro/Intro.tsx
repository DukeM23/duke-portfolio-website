import DukeHeadshot from '../../assets/duke-intro.png'

export default function Intro() {
    return (
      <div className="py-52 grid grid-cols-2">
        <div className="place-self-center">
          <section className="flex flex-col space-y-10 text-secondary">
            <h1>Hi, I'm Duke Maquiling</h1>
            <div className="text-3xl flex flex-col space-y-5">
              <p>I'm a Frontend Developer who enjoys making websites</p>
              <p>Oh, did I tell you I make websites?</p>
            </div>
            <a
              href="#projects"
              className="text-2xl underline underline-offset-2"
            >
              See my projects below
            </a>
          </section>
        </div>
        <img
          src={DukeHeadshot}
          alt="A picture of Duke"
          className="rounded-lg shadow-md place-self-end"
        />
      </div>
    );
}