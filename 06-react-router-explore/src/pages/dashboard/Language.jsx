import { NavLink, Outlet } from "react-router";
import { languageNavData } from "../../utils/data/navData";

const Language = () => {
  return (
    <div className="p-5 w-full">
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-center gap-1 ">
          {languageNavData.map((data, index) => (
            <NavLink
              key={index}
              to={data.path}
              end
              className={({ isActive }) =>
                `text-2xl px-10 border p-2 rounded-full hover:bg-indigo-600 hover:text-white ${isActive ? "bg-indigo-600 text-white" : "bg-transparent"}`
              }
            >
              {data.name}
            </NavLink>
          ))}
        </div>
        <div className="border p-5 mt-5 rounded-xl">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Language;
