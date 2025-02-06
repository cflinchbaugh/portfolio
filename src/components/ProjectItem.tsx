import { css } from "@emotion/css";
import { theme } from "../theme";
import { type Project } from "../hooks/useProjects";

export type ProjectItemProps = {
  imagePositionStart?: boolean;
} & Project;

export const ProjectItem = ({
  approach,
  challenges,
  description,
  imageName,
  imageAriaLabel,
  imagePositionStart = false,
  impact,
  links = [],
  name,
  subheader,
  tags,
}: ProjectItemProps) => {
  const imagePosition = imagePositionStart ? "row" : "row-reverse";

  return (
    <div
      data-image-position={imagePosition}
      data-testid="project-item"
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.lg};
        ${theme.mq.lg} {
          flex-direction: ${imagePosition};
        }
      `}
    >
      {imageName && (
        <div
          aria-label={imageAriaLabel}
          className={css`
            flex: 0 0 25vw; /* Prevents shrinking and ensures a fixed width */

            background-color: #98004b;
            content-visibility: auto;

            background-image: url("${imageName}-300.avif");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            ${theme.mq.lg} {
              background-image: url("${imageName}-600.avif");
            }

            ${theme.mq.xl} {
              background-image: url("${imageName}-1280.avif");
            }
          `}
        />
      )}

      <div
        className={css`
          display: flex;
          flex-direction: column;
          gap: ${theme.spacing.lg};
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
    </div>
  );
};
