import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders initials", () => {
    render(<Hero />);
    expect(screen.getByText("CF")).toBeInTheDocument();
  });

  it("renders name", () => {
    render(<Hero />);
    expect(screen.getByText("Chris Flinchbaugh")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Hero />);
    expect(
      screen.getByText(
        "Software Engineer | Front-End Specialized | UI/UX Engineer"
      )
    ).toBeInTheDocument();
  });
});
