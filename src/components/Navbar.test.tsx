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

    // Check if the menu is initially closed
    const mobileMenu = screen.getByRole("navigation", { hidden: true });
    expect(mobileMenu).toHaveClass("max-h-0"); // Initially closed

    // Click the toggle button
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);

    // Now the menu should be open
    expect(mobileMenu).toHaveClass("max-h-screen");

    // Click again to close the menu
    fireEvent.click(menuButton);
    expect(mobileMenu).toHaveClass("max-h-0");
  });

  test("clicking a nav link closes the mobile menu", () => {
    render(<Navbar navLinks={mockNavLinks} />);

    // Open the menu
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);

    // Click on a navigation link
    const navLink = screen.getByText("Contact");
    fireEvent.click(navLink);

    // Menu should close
    const mobileMenu = screen.getByRole("navigation", { hidden: true });
    expect(mobileMenu).toHaveClass("max-h-0");
  });
});
