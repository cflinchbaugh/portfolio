import { fireEvent, render, screen } from "@testing-library/react";
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
    expect(screen.getByText("What it is")).toBeInTheDocument();
    // rendered by default
    expect(screen.getByText("What result")).toBeInTheDocument();

    // Each individual tag
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
  });

  describe("when Approach is clicked", () => {
    it("renders Approach data", () => {
      render(<ProjectItem {...data} />);

      fireEvent.click(screen.getByText("Approach"));
      expect(screen.getByText("How its done")).toBeInTheDocument();
    });
  });

  describe("when Challenges is clicked", () => {
    it("renders Challenges data", () => {
      render(<ProjectItem {...data} />);

      fireEvent.click(screen.getByText("Challenges"));
      expect(screen.getByText("What needs done")).toBeInTheDocument();
    });
  });

  describe("when Impact is clicked", () => {
    it("renders Impact data", () => {
      render(<ProjectItem {...data} />);

      // Impact is rendered by default, so select something else first
      fireEvent.click(screen.getByText("Challenges"));
      expect(screen.getByText("What needs done")).toBeInTheDocument();

      fireEvent.click(screen.getByText("Impact"));
      expect(screen.getByText("What result")).toBeInTheDocument();
    });
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
