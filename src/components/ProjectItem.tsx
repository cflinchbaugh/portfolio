import { useState, useEffect } from "react";
import { type Project } from "../hooks/useProjects";

export type ProjectItemProps = {
  imagePositionStart?: boolean;
} & Project;

type ActiveDetail = "challenges" | "approach" | "impact";

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
  const [activeDetails, setActiveDetails] = useState<ActiveDetail>("impact");

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

  const activeDetailOptions: ActiveDetail[] = [
    "challenges",
    "approach",
    "impact",
  ];

  return (
    <div
      data-testid="project-item"
      className={`flex gap-6 ${imagePositionClasses}`}
    >
      {imageName && (
        <div
          role="img"
          aria-label={imageAriaLabel}
          className="fade-in flex-none w-full lg:w-[25vw] min-h-[200px] bg-[var(--color-brand-primary-500)] bg-cover bg-no-repeat bg-center"
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

        <div className="flex flex-col gap-2 min-h-[40vh]">
          <div className="flex flex-row gap-2">
            {activeDetailOptions.map((activeDetail, idx) => (
              <span className="flex flex-row gap-1" key={activeDetail}>
                <button
                  className={`${
                    activeDetails === activeDetail
                      ? "bg-brand-primary-600"
                      : "bg-brand-primary-400"
                  } text-white px-2 rounded-sm hover:cursor-pointer`}
                  onClick={() => setActiveDetails(activeDetail)}
                >
                  <span className="capitalize">{activeDetail}</span>
                </button>
                {idx < activeDetailOptions.length - 1 && "→"}
              </span>
            ))}
          </div>

          {activeDetails === "challenges" && (
            <div>
              <h4 className="font-bold">Challenges</h4>
              <div>{challenges}</div>
            </div>
          )}

          {activeDetails === "approach" && (
            <div>
              <h4 className="font-bold">Approach</h4>
              <div>{approach}</div>
            </div>
          )}

          {activeDetails === "impact" && (
            <div>
              <h4 className="font-bold">Impact</h4>
              <div>{impact}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
