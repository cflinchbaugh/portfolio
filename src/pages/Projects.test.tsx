import { render, screen } from "@testing-library/react";
import { Projects } from "./Projects";

describe("Projects", () => {
  it("renders h2", () => {
    render(<Projects />);
    const headings = screen.getAllByRole("heading");
    const h2 = headings[0];
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("Projects");
  });

  it("renders project data", () => {
    render(<Projects />);

    // Verifies multiple Projects are returned, but these are intentionally hard-coded here and may not align with the entire response over time
    expect(screen.getByText("Contract Consultant")).toBeDefined();
    expect(
      screen.getByText("Founder & Leader of Front-End Guild")
    ).toBeDefined();
    expect(screen.getByText("IoT Tech Lead")).toBeDefined();
    expect(screen.getByText("Learnalotl")).toBeDefined();
  });
});
