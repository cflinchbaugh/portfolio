import { render, screen } from "@testing-library/react";
import { Achievements } from "./Achievements";

describe("Achievements", () => {
  it("renders tagline", () => {
    render(<Achievements />);
    expect(
      screen.getByText("Some of my key achievements include:")
    ).toBeInTheDocument();
  });

  it("renders h2", () => {
    render(<Achievements />);
    const h2 = screen.getByRole("heading");
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("Achievements");
  });
});
