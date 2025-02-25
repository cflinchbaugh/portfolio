import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

const mockNavLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

describe("Navbar Component", () => {
  test("renders all navigation links", () => {
    render(<Navbar navLinks={mockNavLinks} />);

    // Check if all nav links are in the document
    mockNavLinks.forEach((link) => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  test("toggles mobile menu when clicking the button", () => {
    render(<Navbar navLinks={mockNavLinks} />);

    const mobileMenu = screen.getByRole("navigation", { hidden: true });
    expect(mobileMenu).toHaveClass("max-h-0"); // Verify initially closed

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);

    expect(mobileMenu).toHaveClass("max-h-screen"); // Verify open behavior

    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("max-h-0"); // Verify close behavior
  });

  test("clicking a nav link closes the mobile menu", () => {
    render(<Navbar navLinks={mockNavLinks} />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton); // open

    const navLink = screen.getByText("Contact");
    fireEvent.click(navLink);

    // Menu should close
    const mobileMenu = screen.getByRole("navigation", { hidden: true });
    expect(mobileMenu).toHaveClass("max-h-0"); // closeed
  });
});
