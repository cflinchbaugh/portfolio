import { css } from "@emotion/css";
import { theme } from "../theme";

const OneBoldDeveloper = () => {
  return (
    <div
      className={css`
        text-align: center;
        border-bottom: solid 1px;
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
          font-size: 1.5rem;
          padding: ${theme.spacing.sm};
          ${theme.mq.md} {
            font-size: 10rem;
          }
        `}
      >
        BOLD
      </span>
      <span
        className={css`
          font-size: ${theme.fontSizes.lg};
        `}
      >
        Developer
      </span>
    </div>
  );
};

const People = () => {
  return (
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
      Providing meaningful design feedback, shaping coding best-practices, and
      communicating between lines of business are all paths that lead me to the
      heart of development- creating an application that solves problems for
      real people.
      <br />
      <br />I thrive at the intersection of technical excellence and user
      experience, ensuring that the applications I build are not only functional
      but also engaging and accessible. I've lead multidisciplinary teams,
      optimized legacy projects, and spearheaded process improvements that have
      driven measurable business impact for years.
    </div>
  );
};

const Problems = () => {
  return (
    <div>
      <strong>
        I solve <i>problems</i>.
      </strong>
      <br />I am passionate about finding the root problem, identifying process
      gaps, and ensuring consistency. I strive to analyze designs and code
      without preconceptions to ensure never missing the forest for the trees.{" "}
      <br />
      <br />
      I'm passionate about mentorship, accessibility, and pushing the boundaries
      of UI/UX design. Whether its building a sleek, high-performance interface
      or solving complex architectural challenges, I love creating solutions
      that make a difference.
    </div>
  );
};

export const About = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        margin: auto;
        min-height: 100vh;
        background: linear-gradient(to bottom, #fe8a75 0%, #b5cbed 100%);
        padding: ${theme.spacing.sm};
      `}
    >
      <h2 className="hidden">About</h2>

      <div
        className={
          css`
            margin: auto;
            max-width: 80vw;
          ` + " frosted-glass"
        }
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.xl};
            max-width: 80vw;
            margin: auto;
          `}
        >
          <OneBoldDeveloper />

          <div
            className={css`
              ${theme.mq.md} {
                margin-bottom: ${theme.spacing.xl};
              }
            `}
          >
            <strong>Hi, I'm Chris-</strong> a software engineer with over a
            decade of experience building scalable, user-focused applications.
            My passion lies in crafting intuitive and performant experiences
            using modern frameworks like React and React Native, but I have a
            strong background in API integration, architecture optimization, and
            testing.
          </div>

          <div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                gap: ${theme.spacing.xl};
                ${theme.mq.md} {
                  flex-direction: row;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                `}
              >
                <People />
              </div>

              <div
                className={css`
                  flex: 1;
                `}
              >
                <Problems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
