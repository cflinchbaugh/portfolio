import { css } from "@emotion/css";
import Carousel from "../components/Carousel";
import { useSkills } from "../hooks/useSkills";
import { theme } from "../theme";

const skillCardClass = css`
  margin: auto;
  padding: ${theme.spacing.md};
`;

const detailClass = css`
  padding-bottom: ${theme.spacing.md};
`;

export const Skills = () => {
  const skillsData = useSkills();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        min-height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: ${theme.spacing.sm};
      `}
    >
      <div className="container-card">
        <h2 className="page-heading">Skills & Experience</h2>

        <div
          className={css`
            margin: auto;
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.lg};
          `}
        >
          <div>
            Throughout my career, I've honed a diverse set of skills across
            various projects—many of them proprietary. Below, you'll find a
            selection of these skills, each contributing to my ability to tackle
            new challenges with confidence and efficiency.
          </div>

          <Carousel>
            {skillsData.map((skill) => (
              <div className={skillCardClass} key={skill.name}>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <span>{skill.icon}</span> <strong>{skill.name}</strong>
                </h3>

                <ul>
                  {skill.details.map((detail, index) => (
                    <li className={detailClass} key={`${skill.name}-${index}`}>
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
