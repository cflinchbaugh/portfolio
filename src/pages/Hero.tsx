import { css } from "@emotion/css";
import { theme } from "../theme";
import LinkedIn from "/LinkedIn.webp";

export const Hero = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.md};
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(to bottom, #ffffff 85%, #fe8a75 100%);
      `}
    >
      <div
        className={css`
          font-size: 10em;
        `}
      >
        CF
      </div>
      <h1
        className={css`
          font-size: ${theme.fontSizes.xxl};
        `}
      >
        Chris Flinchbaugh
      </h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          text-align: center;
          gap: ${theme.spacing.sm};
          ${theme.mq.md} {
            flex-direction: row;
          }
        `}
      >
        <div>Software Engineer</div>
        <span
          className={css`
            display: none;
            ${theme.mq.md} {
              display: initial;
            }
          `}
        >
          |
        </span>
        <div>Front-End Specialized</div>
        <span
          className={css`
            display: none;
            ${theme.mq.md} {
              display: initial;
            }
          `}
        >
          |
        </span>
        <div>UI/UX</div>
      </div>
      <div
        className={css`
          padding: ${theme.spacing.xl};
        `}
      >
        <a
          href="https://www.linkedin.com/in/christopher-flinchbaugh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${LinkedIn}`}
            className={css`
              height: 32px;
              background-color: #cf0276;
              border-radius: 15px;
              padding: 5px;
              transition: background 0.15s;

              &:hover {
                background-color: #970256;
              }
            `}
            alt="LinkedIn Logo"
          ></img>
        </a>
      </div>
    </div>
  );
};
