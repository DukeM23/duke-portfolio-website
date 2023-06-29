import AboutMeImage from "../../assets/self-portrait.png"
import Technology from "../Projects/Technology"

export default function AboutMe() {

    const technologies: Array<string> = [
      "React",
      "NodeJS",
      "ExpressJS",
      "TailwindCSS",
      "MongoDB",
      "Typescript"
    ];

    return (
      <div
        id="about-me"
        className="grid grid-cols-1 md:grid-cols-2 font-roboto md:gap-x-10 py-52 overflow-x-hidden"
      >
        <section className="flex flex-col my-auto text-secondary-200">
          <div className="space-y-5">
            <h1 className="pb-5">About Me</h1>
            <p>
              Oh hey, you made it this far! If that's the case, then I'd like to
              say thank you!
            </p>
            <div className="block md:hidden w-2/3 mx-auto">
              <div className="relative shadow-lg rounded-lg overflow-hidden w-fit mx-auto">
                <div className="absolute flex items-center justify-center h-full w-full bg-secondary-100 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-90">
                  <p className="mistake text-center text-white">
                    This t-shirt made me a crazy poor asian.
                  </p>
                </div>
                <img
                  src={AboutMeImage}
                  alt="A crazy poor Asian"
                  className="self-stretch"
                />
              </div>
            </div>
            <p>
              When I'm not looking at my code asking <i>"Why does this work?"</i>, I'm usually either cooking and weightlifting on my
              free time.
            </p>
          </div>
          <div className="hidden lg:block my-10">
            <p>Some tools and technologies I've been using are:</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 my-5">
              {
                technologies.map((technology: string, idx) => (
                  <Technology key={idx} technology={technology} />
                ))
              }
            </div>
          </div>
        </section>
        <div className="hidden md:inline-block relative shadow-lg rounded-lg overflow-hidden w-fit place-self-center">
          <div className="absolute flex items-center h-full bg-secondary-100 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-90">
            <p className="px-10 text-center text-white">
              This t-shirt made me a crazy poor asian.
            </p>
          </div>
          <img src={AboutMeImage} alt="A crazy poor Asian" />
        </div>
        <div className="col-span-2 lg:hidden text-secondary-200 my-10">
          <p>Some tools and technologies I've been using are:</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2 my-5">
            {technologies.map((technology: string, idx) => (
              <Technology key={idx} technology={technology} />
            ))}
          </div>
        </div>
      </div>
    );
}