import { render, screen } from "@testing-library/react";
import { Achievements } from "./Achievements";

describe("Achievements", () => {
  it("renders h2", () => {
    render(<Achievements />);
    const headings = screen.getAllByRole("heading");
    expect(headings[0]).toHaveTextContent("Professional Achievements");
  });
});
