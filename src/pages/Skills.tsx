import Carousel from "../components/Carousel";
import { useSkills } from "../hooks/useSkills";

export const Skills = () => {
  const skillsData = useSkills();

  return (
    <div className="flex flex-col m-auto min-h-screen p-2 bg-[linear-gradient(to_bottom,_#fe8a75_0%,_#b5cbed_100%)]">
      <div className="container-card">
        <h2 className="page-heading">Skills & Experience</h2>

        <div className="flex flex-col gap-6 m-auto">
          <div>
            Throughout my career, I've honed a diverse set of skills across
            various projects—many of them proprietary. Below, you'll find a
            selection of these skills, each contributing to my ability to tackle
            new challenges with confidence and efficiency.
          </div>

          <Carousel>
            {skillsData.map((skill) => (
              <div className="p-4 m-auto" key={skill.name}>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span>{skill.icon}</span> <strong>{skill.name}</strong>
                </h3>

                <ul>
                  {skill.details.map((detail, index) => (
                    <li className="pb-4" key={`${skill.name}-${index}`}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
