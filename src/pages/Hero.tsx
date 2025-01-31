import { css } from "@emotion/css";
import { theme } from "../theme";

export const Hero = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(to bottom, #ffffff 85%, #fe8a75 100%);
      `}
    >
      {" "}
      <div
        className={css`
          font-size: 10em;
        `}
      >
        CF
      </div>
      <div
        className={css`
          font-size: ${theme.fontSizes.xxl};
        `}
      >
        Chris Flinchbaugh
      </div>
      <div>Software Engineer | Front-End Specialized | UI/UX Engineer</div>
    </div>
  );
};
