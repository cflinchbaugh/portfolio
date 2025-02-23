import useFadeIn from "../hooks/useFadeIn";

const OneBoldDeveloper = () => {
  return (
    <div className="text-center border-b-1 text-cyber-yellow-500">
      <span className="text-lg">One</span>
      <span className="text-2xl md:text-[10rem] p-1.5 font-semibold">BOLD</span>
      <span className="text-lg">Developer</span>
    </div>
  );
};

const People = () => {
  return (
    <div className="md:text-end">
      <strong className="text-cyber-yellow-500">
        I specialize in <i className="text-cyber-yellow-400">people</i>.
      </strong>

      <p>
        Providing meaningful design feedback, shaping coding best-practices, and
        communicating between lines of business are all paths that lead me to
        the heart of development- creating an application that solves problems
        for real people.
      </p>
      <br />
      <p>
        I thrive at the intersection of technical excellence and user
        experience, ensuring that the applications I build are not only
        functional but also engaging and accessible. I've lead multidisciplinary
        teams, optimized legacy projects, and spearheaded process improvements
        that have driven measurable business impact for years.
      </p>
    </div>
  );
};

const Problems = () => {
  return (
    <div>
      <strong className="text-cyber-yellow-500">
        I solve <i className="text-cyber-yellow-400">problems</i>.
      </strong>

      <p>
        I am passionate about finding the root problem, identifying process
        gaps, and ensuring consistency. I strive to analyze designs and code
        without preconceptions to ensure never missing the forest for the trees.{" "}
      </p>
      <br />
      <p>
        I'm passionate about mentorship, accessibility, and pushing the
        boundaries of UI/UX design. Whether its building a sleek,
        high-performance interface or solving complex architectural challenges,
        I love creating solutions that make a difference.
      </p>
    </div>
  );
};

export const About = () => {
  useFadeIn();

  return (
    <div className="flex flex-col m-auto min-h-screen p-2 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="hidden">About</h2>

        <div className="m-auto fade-in">
          <div className="flex flex-col gap-8 md:px-8 m-auto bg-cyber-black-400 text-white rounded-lg p-5 border-2 border-cyber-red-500">
            <OneBoldDeveloper />

            <div className="md:mb-8">
              <strong className="text-cyber-yellow-500">
                Hi, I'm <i>Chris</i>-
              </strong>{" "}
              a software engineer with over a decade of experience building
              scalable, user-focused applications. My passion lies in crafting
              intuitive and performant experiences using modern frameworks like
              React and React Native, but I have a strong background in API
              integration, architecture optimization, and testing.
            </div>

            <div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <People />
                </div>

                <div className="flex-1">
                  <Problems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
