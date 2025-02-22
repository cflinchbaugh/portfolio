import Carousel from "../components/Carousel";
import { ProjectItem } from "../components/ProjectItem";
import ThreeDCarousel from "../components/ThreeDCarousel";

import { useProjects } from "../hooks/useProjects";

export const Projects = () => {
  const projectData = useProjects();

  return <ThreeDCarousel />;

  return (
    <div className="flex flex-col m-auto gap-6 min-h-screen p-2 md:px-6 md:py-2 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="page-heading">Projects</h2>

        <Carousel>
          {projectData.map((project) => {
            return (
              <div className="frosted-glass" key={project.name}>
                <ProjectItem {...project} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
