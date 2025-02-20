import { css } from "@emotion/css";
import { theme } from "../theme";
import { useAchievements } from "../hooks/useAchievements";

export const Achievements = () => {
  const achievementsData = useAchievements();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: ${theme.spacing.sm};
      `}
    >
      <div className="container-card">
        <h2 className="page-heading">Achievements</h2>
        <div className="frosted-glass">
          <div
            className={css`
              display: flex;
              flex-direction: column;
              gap: ${theme.spacing.xl};
            `}
          >
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
