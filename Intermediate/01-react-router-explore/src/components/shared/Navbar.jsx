import { NavLink } from "react-router";
import { navData } from "../../utils/data/navData";

const Navbar = () => {
  return (
    <nav className="h-[70px]   flex items-center justify-between px-6">
      <h2 className="text-2xl uppercase">logo</h2>
      <div className="flex items-center gap-5">
        {navData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `border px-5 py-1.5 rounded-full ${isActive ? "bg-black text-white" : ""}`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
