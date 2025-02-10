import { css } from "@emotion/css";
import { theme } from "../theme";

export const Achievements = () => {
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
      <h2 className="hidden">Achievements</h2>

      <div className="container-card frosted-glass">
        <div
          className={
            css`
              display: flex;
              flex-direction: column;
              gap: ${theme.spacing.xl};
            ` + " container-card"
          }
        >
          Some of my key achievements include:
          <ul
            className={css`
              display: flex;
              flex-direction: column;
              gap: ${theme.spacing.lg};
            `}
          >
            <li>
              <strong>Drove a 100% increase in deposits</strong> at a fintech
              startup by developing a cutting-edge mobile check deposit system
              with AI-powered text recognition.
            </li>
            <li>
              <strong>Won the "Champion of Process Improvement" award</strong>{" "}
              for streamlining engineering workflows and enhancing efficiency,
              improving developer velocity across teams.
            </li>
            <li>
              <strong>Led cross-functional teams of 10-20 engineers</strong>{" "}
              across IoT, manufacturing, ecommerce, and fintech projects;
              driving architecture decisions, best practices, and delivery of
              high-quality software.
            </li>
            <li>
              <strong>Founded a Front-End Guild</strong> to mentor dozens of
              engineers, standardize best practices, and improve
              collaboration—an initiative so impactful that it led to the
              creation of additional discipline-based guilds across the
              organization.
            </li>
            <li>
              <strong>
                Reduced UI development time and established brand
                user-experience
              </strong>{" "}
              by building a scalable, reusable proprietary React component
              library, ensuring design consistency across company projects.
            </li>
            <li>
              <strong>Achieved WCAG AA compliance</strong> across enterprise
              software by advocating for and implementing accessibility
              standards, enhancing usability for tens of thousands of users and
              unlocking new business opportunities.
            </li>
            <li>
              <strong>Improved developer productivity and code quality</strong>{" "}
              by optimizing TypeScript configurations, streamlining workflows,
              and proactively identifying and resolving defects early in the
              development cycle.
            </li>
            <li>
              <strong>Reduced manual QA testing time by more than 60%</strong>{" "}
              by implementing comprehensive unit and end-to-end testing with
              Jest, Vitest, and Playwright, significantly improving test
              reliability and catching regressions early.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
