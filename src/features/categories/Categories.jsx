import { Outlet } from "react-router-dom";
import Sidebar from "../../ui/Sidebar";

function Categories() {
  return (
    <section className="px-4 mt-32 mb-12 min-h-screen">
      <div className="mx-auto grid max-w-customLg gap-8 md:grid-cols-[2fr_6fr]">
        <Sidebar />
        <Outlet />
      </div>
    </section>
  );
}

export default Categories;
