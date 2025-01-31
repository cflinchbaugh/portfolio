import { render, screen } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders tagline", () => {
    render(<About />);
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("BOLD")).toBeInTheDocument();
    expect(screen.getByText("Developer")).toBeInTheDocument();
  });

  it("renders specialize in people content", () => {
    render(<About />);
    expect(screen.getByText(/I specialize in/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Providing meaningful design feedback, shaping coding best-practices, and communicating between lines of business are all paths that lead me to the heart of development- creating an application that solves problems for real people./
      )
    ).toBeInTheDocument();
  });

  it("renders solve problems content", () => {
    render(<About />);
    expect(screen.getByText(/I solve/)).toBeInTheDocument();
    expect(
      screen.getByText(
        /I am passionate about finding the root problem, identifying process gaps, and ensuring consistency. I strive to analyze designs and code without preconceptions to ensure never missing the forest for the trees./
      )
    ).toBeInTheDocument();
  });
});
