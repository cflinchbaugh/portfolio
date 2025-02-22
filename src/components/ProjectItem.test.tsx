import { render, screen } from "@testing-library/react";
import { ProjectItem } from "./ProjectItem";
import type { ProjectItemProps } from "./ProjectItem";

const data: ProjectItemProps = {
  name: "Name",
  subheader: "Subheader",
  approach: "How its done",
  challenges: "What needs done",
  description: "What it is",
  imageName: "learnalotl",
  imageAriaLabel: "Hand writing with mechanical pencil",
  impact: "What result",
  links: [
    {
      name: "Link",
      url: "https://www.google.com",
    },
  ],
  tags: ["First", "Second", "Third"],
};

describe("ProjectItem", () => {
  it("renders the required data", () => {
    render(<ProjectItem {...data} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Subheader")).toBeInTheDocument();
    // expect(screen.getByText("How its done")).toBeInTheDocument();
    // expect(screen.getByText("What needs done")).toBeInTheDocument();
    expect(screen.getByText("What it is")).toBeInTheDocument();
    expect(screen.getByText("What result")).toBeInTheDocument();

    // Each individual tag
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
  });

  describe("when links are passed it", () => {
    it("renders each link", () => {
      render(<ProjectItem {...data} />);

      expect(screen.queryByTestId("project-links")).toBeDefined();
      expect(screen.getByText("Link")).toHaveAttribute(
        "href",
        "https://www.google.com"
      );
    });
  });

  describe("when no links are passed it", () => {
    it("does not render the links section", () => {
      const updatedData = {
        ...data,
        links: undefined,
      };
      render(<ProjectItem {...updatedData} />);

      expect(screen.queryByTestId("project-links")).toBeNull();
    });
  });

  describe("when imagePositionStart prop is false", () => {
    it("applies the flex-row class", () => {
      const updatedData = {
        ...data,
        imagePositionStart: true,
      };
      render(<ProjectItem {...updatedData} />);

      const container = screen.getByTestId("project-item");
      expect(container).toHaveClass("lg:flex-row");
    });
  });

  describe("when imagePositionStart prop is true ", () => {
    it("applies the flex-row-reverse class", () => {
      const updatedData = {
        ...data,
        imagePositionStart: false,
      };

      render(<ProjectItem {...updatedData} />);

      const container = screen.getByTestId("project-item");
      expect(container).toHaveClass("lg:flex-row-reverse");
    });
  });
});
