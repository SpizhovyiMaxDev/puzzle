import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../data/sidebar";

function Sidebar() {
  return (
    <menu className="hidden md:block">
      <ul className="leading-9 space-y-2">
        {sidebarLinks.map((category, index) => (
          <li key={index}>
            <NavLink
              to={category.link}
              className={({ isActive }) =>
                `block hover:border-l-stone-900 border-l-[4px] border-[1px] hover:border-stone-300 border-stone-100 py-2 px-3 transition-all rounded-md text-sm xl:text-lg ${
                  isActive
                    ? "border-l-stone-900 border-stone-400 text-stone-900"
                    : "text-stone-700"
                }`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </menu>
  );
}

export default Sidebar;
