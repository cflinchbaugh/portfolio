import { render, screen } from "@testing-library/react";
import { ImageLink } from "./ImageLink";
import type { ImageLinkProps } from "./ImageLink";
import email from "/email.webp";

const data: ImageLinkProps = {
  alt: "Sample alt text",
  href: "https://www.google.com",
  src: email,
};

describe("ImageLink", () => {
  it("renders the passed in alt text", () => {
    render(<ImageLink {...data} />);

    expect(screen.getByAltText("Sample alt text")).toBeDefined();
  });

  it("renders the passed in href", () => {
    render(<ImageLink {...data} />);

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://www.google.com"
    );
  });

  it("renders the correct image src", () => {
    render(<ImageLink {...data} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", data.src);
  });
});
