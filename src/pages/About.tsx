import { css } from "@emotion/css";
import { theme } from "../theme";

export const About = () => {
  return (
    <div
      className={css`
        display: flex;
        gap: ${theme.spacing.md};
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: 0 ${theme.spacing.lg};
      `}
    >
      <div
        className={css`
          text-align: center;
        `}
      >
        <span
          className={css`
            font-size: ${theme.fontSizes.lg};
          `}
        >
          One
        </span>
        <span
          className={css`
            font-size: 2rem;
            padding: ${theme.spacing.sm};
            ${theme.mq.md} {
              font-size: 5rem;
            }
            ${theme.mq.md} {
              font-size: 10rem;
            }
          `}
        >
          BOLD
        </span>
        <span>Developer</span>
      </div>

      <div
        className={css`
          display: flex;
          gap: ${theme.spacing.lg};

          flex-direction: column;
          ${theme.mq.md} {
            flex-direction: row;
          }
        `}
      >
        <div
          className={css`
            ${theme.mq.md} {
              text-align: end;
            }
          `}
        >
          <strong>
            I specialize in <i>people</i>.
          </strong>
          <br />
          Providing meaningful design feedback, shaping coding best-practices,
          and communicating between lines of business are all paths that lead me
          to the heart of development- creating an application that solves
          problems for real people.
        </div>

        <div>
          <strong>
            I solve <i>problems</i>.
          </strong>
          <br />I am passionate about finding the root problem, identifying
          process gaps, and ensuring consistency. I strive to analyze designs
          and code without preconceptions to ensure never missing the forest for
          the trees.
        </div>
      </div>
    </div>
  );
};
