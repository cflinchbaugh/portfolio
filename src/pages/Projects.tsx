import { css } from "@emotion/css";
import { theme } from "../theme";
import { Project } from "../components/Project";
import { useProjects } from "../hooks/useProjects";

export const Projects = () => {
  const projectData = useProjects();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        gap: ${theme.spacing.lg};
        min-height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: ${theme.spacing.lg};
      `}
    >
      <h2 className="hidden">Projects</h2>
      {projectData.map((project) => (
        <div
          className={
            css`
              margin: auto;
              max-width: 80vw;
            ` + " frosted-glass"
          }
          key={project.name}
        >
          <Project key={project.name} {...project} />
        </div>
      ))}
    </div>
  );
};
