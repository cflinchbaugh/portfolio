import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders initials", () => {
    render(<App />);
    expect(screen.getByText("CF")).toBeInTheDocument();
  });
  it("renders name", () => {
    render(<App />);
    expect(screen.getByText("Chris Flinchbaugh")).toBeInTheDocument();
  });
  it("renders title", () => {
    render(<App />);
    expect(
      screen.getByText(
        "Software Engineer | Front-End Specialized | UI/UX Engineer"
      )
    ).toBeInTheDocument();
  });
});
