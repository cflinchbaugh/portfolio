import { css } from "@emotion/css";
import "./App.css";

function App() {
  return (
    <>
      <div
        className={css`
          font-size: 10em;
        `}
      >
        CF
      </div>

      <div
        className={css`
          font-size: 2em;
        `}
      >
        Chris Flinchbaugh
      </div>
      <div>Software Engineer | Front-End Specialized | UI/UX Engineer</div>
    </>
  );
}

export default App;
