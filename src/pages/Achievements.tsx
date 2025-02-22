import { useAchievements } from "../hooks/useAchievements";

export const Achievements = () => {
  const achievementsData = useAchievements();

  return (
    <div className="flex flex-col min-h-full p-2 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="page-heading">Achievements</h2>
        <div className="frosted-glass">
          <div className="flex flex-col gap-8">
            Some of my key achievements include:
            {achievementsData.map((item) => (
              <div key={item.id}>
                <strong>{item.head}</strong> {item.tail}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
