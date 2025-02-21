import { useState, useEffect } from "react";
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
  const imagePositionClasses = imagePositionStart
    ? "flex-col lg:flex-row"
    : "flex-col lg:flex-row-reverse";

  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBgImage = () => {
      if (window.innerWidth >= 1024) {
        setBgImage(`url('${imageName}-1280.avif')`);
      } else if (window.innerWidth >= 768) {
        setBgImage(`url('${imageName}-600.avif')`);
      } else {
        setBgImage(`url('${imageName}-300.avif')`);
      }
    };

    updateBgImage();
    window.addEventListener("resize", updateBgImage);
    return () => window.removeEventListener("resize", updateBgImage);
  }, [imageName]);

  return (
    <div
      data-testid="project-item"
      className={`flex gap-6 ${imagePositionClasses}`}
    >
      {imageName && (
        <div
          role="img"
          aria-label={imageAriaLabel}
          className="fade-in flex-none w-full lg:w-[25vw] min-h-[200px] bg-[#98004b] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: bgImage }}
        />
      )}

      <div className="flex flex-col gap-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <div>{subheader}</div>

        <div>
          <h4 className="font-bold">Description</h4>
          <div>{description}</div>
        </div>

        {links.length > 0 && (
          <div data-testid="project-links" className="flex gap-4">
            {links.map((link) => (
              <a
                href={link.url}
                key={link.name}
                target="_blank"
                className="text-blue-500 underline"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <div
              key={tag}
              className="text-xs border border-gray-400 rounded-lg px-2 py-1"
            >
              {tag}
            </div>
          ))}
        </div>

        <div>
          <h4 className="font-bold">Challenges</h4>
          <div className="fade-in">{challenges}</div>
        </div>

        <div>
          <h4 className="font-bold">Approach</h4>
          <div className="fade-in">{approach}</div>
        </div>

        <div>
          <h4 className="font-bold">Impact</h4>
          <div className="fade-in">{impact}</div>
        </div>
      </div>
    </div>
  );
};
