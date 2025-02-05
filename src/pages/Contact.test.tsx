import { render, screen } from "@testing-library/react";
import { Contact } from "./Contact";

describe("Contact", () => {
  it("renders h2", () => {
    render(<Contact />);
    const h2 = screen.getByRole("heading");
    expect(h2).toBeInTheDocument();
    expect(h2).toHaveTextContent("Contact");
  });

  it("renders the tagline", () => {
    render(<Contact />);
    const tagline = screen.getByText(
      "You've heard a bit about me, I'd love to hear from you."
    );
    expect(tagline).toBeInTheDocument();
  });

  it("renders the contact links", () => {
    render(<Contact />);

    const linnkedIn = screen.getByAltText("LinkedIn Logo");
    expect(linnkedIn).toBeInTheDocument();

    const email = screen.getByAltText("Email Logo");
    expect(email).toBeInTheDocument();

    const gitHub = screen.getByAltText("GitHub Logo");
    expect(gitHub).toBeInTheDocument();
  });
});
