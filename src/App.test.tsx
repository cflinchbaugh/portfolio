import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders the heading", () => {
    render(<App />);
    expect(screen.getByText("Test GitHub Actions Failure")).toBeInTheDocument();
  });
});
