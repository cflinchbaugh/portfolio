import { ProjectItem } from "../components/ProjectItem";
import useFadeIn from "../hooks/useFadeIn";
import { useProfessionalHistory } from "../hooks/useProfessionalHistory";

export const ProfessionalHistory = () => {
  useFadeIn();

  const professionalHistoryData = useProfessionalHistory();

  return (
    <div className="flex flex-col m-auto gap-6 min-h-screen p-2 md:px-6 md:py-2 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="page-heading">Professional History</h2>

        <div className="flex flex-col gap-8">
          {professionalHistoryData.map((project, index) => {
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

export default ProfessionalHistory;
