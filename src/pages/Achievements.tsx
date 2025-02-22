import { useAchievements } from "../hooks/useAchievements";

export const Achievements = () => {
  const achievements = useAchievements();

  const layoutClasses = [
    "col-span-1 xl:row-span-2",
    "col-span-1 xl:row-span-2",
    "col-span-1 xl:row-span-4",
    "xl:col-span-2 xl:row-span-2",
    "xl:col-span-1 xl:row-span-2",
    "xl:col-span-1 xl:row-span-2",
    "xl:col-span-1 xl:row-span-2",
    "xl:col-span-1 xl:row-span-2",
    "xl:col-span-2 xl:row-span-2",
    "xl:col-span-2 xl:row-span-2",
  ];

  return (
    <div className="flex flex-col min-h-full p-2 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="page-heading">Professional Achievements</h2>

        <div className="grid gap-5 h-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`${
                index < layoutClasses.length
                  ? layoutClasses[index]
                  : "xl:col-span-1 xl:row-span-2"
              } fade-in`}
            >
              <div className="flex h-full w-full frosted-glass">
                <div>
                  <p className="mb-2 text-2xl font-semibold">
                    {achievement.head}
                  </p>
                  <p>{achievement.tail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
