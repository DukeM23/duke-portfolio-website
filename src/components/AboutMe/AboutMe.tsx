import kamiSama  from "../../assets/kami-sama.png"
import goodVibrations from "../../assets/good_vibrations.png"
import Technology from "../Projects/Technology"

export default function AboutMe() {

    const technologies: Array<string> = [
        "React", 
        "NodeJS",
        "ExpressJS",
        "TailwindCSS",
        "MongDB",
    ]

    return (
      <div className="grid grid-cols-3 py-52 overflow-x-hidden">
        <section className="col-span-2 text-secondary font-roboto">
          <div className="flex flex-col space-y-5">
            <h1>About Me</h1>
            <p className="text-2xl">
              Oh hey, you made it this far! If that's the case, then I'd like to
              say thank you!
            </p>
            <p className="text-2xl">
              Aside from sitting in front of a computer, I cook and lift on my
              free time. Recently hit 225 by the way 😏.
            </p>
            <p className="text-2xl">
              Some tools and technologies I've been using are:
            </p>
            <div className="flex flex-wrap gap-x-3">
                {
                    technologies.map((technology:string, idx) => <Technology key={idx} technology={technology} />)
                }
            </div>
          </div>
        </section>
        <div id="about-me" className="">
          <img
            src={kamiSama}
            className="kami-sama"
          />
          <img
            src={goodVibrations}
            className="good-vibration"
          />
        </div>
      </div>
    );
}