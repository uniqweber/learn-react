import { NavLink } from "react-router";
import { useThemeMode } from "../../context/themeContext/ThemeModeContext";
import { FaMoon, FaSun } from "react-icons/fa";
const Navbar = () => {
  const { isDark, toggleTheme } = useThemeMode();

  return (
    <nav className=" h-16 bg-gray-400 text-white flex items-center ">
      <div className="container mx-auto flex items-center justify-between ">
        <div>LOGO</div>
        <div className="flex items-center">
          <NavLink to={"/"} className={({ isActive }) => `px-8 py-2 ${isActive ? "text-rose-600 bg-white" : ""}`}>
            Home
          </NavLink>
          <NavLink to={"/about"} className={({ isActive }) => `px-8 py-2 ${isActive ? "text-rose-600 bg-white" : ""}`}>
            About
          </NavLink>
          {isDark ? <FaSun onClick={toggleTheme} /> : <FaMoon onClick={toggleTheme} />}
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
