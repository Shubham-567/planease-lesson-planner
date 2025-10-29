import { Menu, Moon, NotebookText, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const underlineStyle =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-full after:bg-primary after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-130";

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/planner", label: "Planner" },
    { to: "/about", label: "About" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <header className='fixed top-0 left-0 w-full bg-base-100 border-b-[1px] border-base-300 z-50'>
      <div className='flex justify-between items-center gap-4 px-6 py-3.5 max-w-7xl mx-auto'>
        <NavLink
          to='/'
          className='text-2xl font-bold font-serif flex items-center gap-2'
          onClick={() => setIsMenuOpen(false)}>
          <NotebookText className='text-primary size-8' />
          <h2>PlanEase</h2>
        </NavLink>
        <nav>
          {/* each element will have animated expanding underline effect */}
          <ul className='flex items-center gap-8 font-medium max-md:hidden'>
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${underlineStyle}
                    ${
                      isActive
                        ? "text-neutral after:scale-x-130"
                        : "text-neutral-muted hover:text-neutral"
                    }`
                  }>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-4 max-md:hidden'>
          {/* dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='btn-icon'
            aria-label='Toggle dark mode'>
            <div
              className={`transition-transform duration-500 ${
                isDarkMode ? "rotate-180" : "rotate-0"
              }`}>
              {isDarkMode ? (
                <Sun className='size-5' />
              ) : (
                <Moon className='size-5' />
              )}
            </div>
          </button>

          <NavLink to='/planner' className='btn btn-outline text-sm py-2 px-4'>
            Get Started
          </NavLink>
        </div>

        {/* mobile menu trigger */}
        <div className='md:hidden flex items-center gap-2 sm:gap-4'>
          {/* dark mode toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className='icon-btn'
            aria-label='Toggle dark mode'>
            <div
              className={`transition-transform duration-500 ${
                isDarkMode ? "rotate-180" : "rotate-0"
              }`}>
              {isDarkMode ? (
                <Sun className='size-5' />
              ) : (
                <Moon className='size-5' />
              )}
            </div>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-base hover:text-primary flex flex-col justify-center items-center cursor-pointer'
            aria-label='Toggle menu'>
            {isMenuOpen ? (
              <X className='size-6' />
            ) : (
              <Menu className='size-6' />
            )}
          </button>

          {/* mobile menu overlay */}
          {isMenuOpen && (
            <nav className='absolute -z-5 bg-base-100 min-h-[90vh] w-full top-[4rem] left-0 '>
              <ul className='flex flex-col justify-center items-center md:hidden text-3xl font-bold gap-8 min-h-[94vh] border-t border-base-300'>
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-neutral after:scale-x-130"
                          : "text-neutral-muted hover:text-neutral"
                      }
                      onClick={() => setIsMenuOpen(false)}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
