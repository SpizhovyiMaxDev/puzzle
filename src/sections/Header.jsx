import { useState } from "react";
import { navLinks as links } from "../data/navigation";
import { Link } from "react-router-dom";

import Logo from "../ui/Logo";
import Hamburger from "../ui/Hamburger";

function Header() {
  const [stateNav, setStateNav] = useState(false);

  function handleMobileNav() {
    setStateNav((state) => !state);
  }

  return (
    <header className="fixed w-full bg-white z-30">
      <div className="flex items-center justify-between px-4 py-4 sm:p-8">
        <Logo />

        <nav
          className={`fixed left-0 top-0 z-10 flex h-screen w-full items-center justify-center bg-white transition-transform md:static md:h-auto md:w-auto md:translate-x-0 ${
            stateNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex  flex-col items-center gap-5 text-lg md:flex-row">
            <li className="md:block">
              <Link to="/cart" onClick={handleMobileNav}>
                Cart
              </Link>
            </li>
            {links.map((link, index) => (
              <li
                key={index}
                className={`${!link.hiddenOnDesktop ? "hidden md:block" : "block md:hidden"}`}
              >
                <Link to={link.to} onClick={handleMobileNav}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Hamburger state={stateNav} handleMobileNav={handleMobileNav} />
      </div>
    </header>
  );
}

export default Header;
