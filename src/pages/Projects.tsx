import { css } from "@emotion/css";
import { theme } from "../theme";
import { ProjectItem } from "../components/ProjectItem";
import { useProjects } from "../hooks/useProjects";
import useFadeIn from "../hooks/useFadeIn";

export const Projects = () => {
  useFadeIn();

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
        padding: ${theme.spacing.sm};

        ${theme.mq.md} {
        padding: ${theme.spacing.lg} ${theme.spacing.sm}
      `}
    >
      <div className="container-card">
        <h2 className="page-heading">Projects</h2>

        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: 2rem;
          `}
        >
          {projectData.map((project, index) => {
            const data = {
              ...project,
              imagePositionStart: Boolean(index % 2),
            };
            return (
              <div className="frosted-glass" key={project.name}>
                <ProjectItem key={project.name} {...data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
