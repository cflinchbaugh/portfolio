import { css } from "@emotion/css";
import { theme } from "../theme";
import { type Project as ProjectData } from "../hooks/useProjects";

type ProjectProps = ProjectData;

export const Project = ({
  approach,
  challenges,
  description,
  impact,
  links = [],
  name,
  subheader,
  tags,
}: ProjectProps) => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.md};
      `}
    >
      <h3
        className={css`
          font-size: ${theme.fontSizes.xl};
        `}
      >
        <strong>{name}</strong>
      </h3>
      <div>{subheader}</div>

      <div>
        <h4>
          <strong>Description</strong>
        </h4>

        <div>{description}</div>
      </div>

      {Boolean(links.length) && (
        <div
          data-testid="project-links"
          className={css`
            display: flex;
            flex-direction: row;
            gap: ${theme.spacing.md};
          `}
        >
          {links.map((link) => (
            <a href={link.url} key={link.name} target="_blank">
              {link.name}
            </a>
          ))}
        </div>
      )}

      <div
        className={css`
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: ${theme.spacing.sm};
        `}
      >
        {tags.map((tag) => (
          <div
            className={css`
              font-size: ${theme.fontSizes.xs};
              border: solid 1px;
              border-radius: ${theme.spacing.lg};
              padding: ${theme.spacing.sm};
            `}
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>

      <div>
        <h4>
          <strong>Challenges</strong>
        </h4>

        <div>{challenges}</div>
      </div>
      <div>
        <h4>
          <strong>Approach</strong>
        </h4>

        <div>{approach}</div>
      </div>
      <div>
        <h4>
          <strong>Impact</strong>
        </h4>

        <div>{impact}</div>
      </div>
    </div>
  );
};
