import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" h-16 bg-black text-white flex items-center ">
      <div className="container mx-auto flex items-center justify-between ">
        <div>Logo</div>
        <div>
          <NavLink to={"/"} className={({ isActive }) => `px-8 border-y ${isActive ? "text-rose-600 bg-white" : ""}`}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `px-8 border-y ${isActive ? "text-rose-600 bg-white" : ""}`}>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
