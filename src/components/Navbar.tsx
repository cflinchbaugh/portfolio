import { useState } from "react";

type NavItemsProps = {
  handleClickItem: () => void;
  navLinks: NavLink[];
};

const NavItems = ({ handleClickItem, navLinks }: NavItemsProps) => {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
      {navLinks.map((item) => (
        <li
          className="max-sm:hover:bg-black-500 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
          key={item.name}
        >
          <a href={item.href} className="nav-li_a" onClick={handleClickItem}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

type NavLink = {
  href: string;
  name: string;
};
const Navbar = ({ navLinks }: { navLinks: NavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed sm:shadow-md top-0 left-0 right-0 z-50 bg-cyber-yellow-500">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex items-center justify-between py-1 sm:px-4 px-5">
          <a
            href="#home"
            className="text-xl font-bold text-neutral-400 transition-colors hover:text-white"
          >
            Chris
          </a>

          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              alt="menu-toggle"
              className="h-6 w-6 interactive"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
              src={isOpen ? "close.svg" : "menu.svg"}
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems
              handleClickItem={() => setIsOpen(false)}
              navLinks={navLinks}
            />
          </nav>
        </div>
      </div>

      <div
        className={`
        absolute left-2 right-2 shadow-lg bg-black-200 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block
        ${isOpen ? "max-h-screen border rounded" : "max-h-0"}`}
      >
        <nav className="p-5">
          <NavItems
            handleClickItem={() => {
              console.log("click");
              setIsOpen(false);
            }}
            navLinks={navLinks}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
