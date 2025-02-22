import { render, screen } from "@testing-library/react";
import { ProfessionalHistory } from "./ProfessionalHistory";

describe("ProfessionalHistory", () => {
  it("renders h2", () => {
    render(<ProfessionalHistory />);
    const headings = screen.getAllByRole("heading");
    const h2 = headings[0];
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("Professional History");
  });

  it("renders project data", () => {
    render(<ProfessionalHistory />);

    // Verifies multiple Projects are returned, but these are intentionally hard-coded here and may not align with the entire response over time
    expect(screen.getByText("Contract Consultant")).toBeDefined();
    expect(
      screen.getByText("Founder & Leader of Front-End Guild")
    ).toBeDefined();
    expect(screen.getByText("IoT Tech Lead")).toBeDefined();
  });
});
