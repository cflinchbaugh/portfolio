import { useEffect, useState } from "react";

type NavItemsProps = {
  handleClickItem: () => void;
  navLinks: NavLink[];
};

const NavItems = ({ handleClickItem, navLinks }: NavItemsProps) => {
  return (
    <ul
      className="flex flex-col opacity-80 relative z-20 rounded overflow-clip w-full
        gap-2 sm:gap-0 sm:items-center sm:flex-row sm:w-fit"
    >
      {navLinks.map((item) => (
        <li
          className="text-cyber-blue-500 bg-cyber-black-500 px-4 sm:px-3 py-4 sm:py-0 hover:bg-cyber-blue-500 hover:text-cyber-black-500 transition-colors"
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

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-2 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto flex items-center justify-end py-1 sm:px-4 px-5">
            <button
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <img
                alt="menu-toggle"
                className="h-6 w-6 interactive"
                src={isOpen ? "close.svg" : "menu.svg"}
              />
            </button>
          </div>
        </div>

        <nav
          className={`
          absolute left-0 right-0 bg-cyber-black-400 text-cyber-blue-500 transition-all duration-300 ease-in-out overflow-hidden z-20 mx-2
          ${isOpen ? "max-h-screen" : "max-h-0"}
          sm:max-h-none sm:block sm:relative  sm:bg-transparent
        `}
        >
          <div className="px-4">
            <div className="flex sm:justify-end border-cyber-blue-500">
              <NavItems
                handleClickItem={() => setIsOpen(false)}
                navLinks={navLinks}
              />
            </div>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed sm:hidden top-0 right-0 bottom-0 left-0 z-10 frosted-glass overscroll-none"></div>
      )}
    </>
  );
};

export default Navbar;
