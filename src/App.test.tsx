import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders main", () => {
    render(<App />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});
