import { render, screen } from "@testing-library/react";
import { Project } from "./Project";
import { type Project as ProjectData } from "../hooks/useProjects";

const data: ProjectData = {
  name: "Name",
  subheader: "Subheader",
  approach: "How its done",
  challenges: "What needs done",
  description: "What it is",
  impact: "What result",
  links: [
    {
      name: "Link",
      url: "https://www.google.com",
    },
  ],
  tags: ["First", "Second", "Third"],
};

describe("Project", () => {
  it("renders the required data", () => {
    render(<Project {...data} />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Subheader")).toBeInTheDocument();
    expect(screen.getByText("How its done")).toBeInTheDocument();
    expect(screen.getByText("What needs done")).toBeInTheDocument();
    expect(screen.getByText("What it is")).toBeInTheDocument();
    expect(screen.getByText("What result")).toBeInTheDocument();

    // Each individual tag
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
  });

  describe("when links are passed it", () => {
    it("renders each link", () => {
      render(<Project {...data} />);

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
      render(<Project {...updatedData} />);

      expect(screen.queryByTestId("project-links")).toBeNull();
    });
  });
});
