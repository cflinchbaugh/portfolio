import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders initials", () => {
    render(<Hero />);
    expect(screen.getByText("CF")).toBeInTheDocument();
  });

  it("renders h1", () => {
    render(<Hero />);
    const h1 = screen.getByRole("heading");
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent("Chris Flinchbaugh");
  });

  it("renders name", () => {
    render(<Hero />);
    expect(screen.getByText("Chris Flinchbaugh")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<Hero />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Front-End Specialized")).toBeInTheDocument();
    expect(screen.getByText("UI/UX")).toBeInTheDocument();
  });
});
