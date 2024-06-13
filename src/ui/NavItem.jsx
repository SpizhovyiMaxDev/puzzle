import React from "react";

const NavItem = ({ title, links }) => {
  return (
    <nav className="space-y-2 leading-[2]">
      <p className="text-lg font-semibold">{title}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a
              aria-label={`Footer link to ${link.label}`}
              href={link.href}
              className="text-base text-stone-600 hover:text-stone-800"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavItem;
