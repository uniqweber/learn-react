import { NavLink, Outlet } from "react-router";
import { dashNavData } from "../../utils/data/navData";

const Dashboard = () => {
  return (
    <div className="basic  ">
      <div className="h-full flex w-full">
        <div className="h-full flex flex-col py-10 gap-5 px-5 w-80 bg- flex-shrink-0">
          {dashNavData.map((nav, index) => (
            <NavLink
              key={index}
              to={nav.path}
              end={nav.index}
              className={({ isActive }) =>
                `text-2xl px-5 py-2  border hover:bg-green-600 hover:text-white text-center rounded-full ${
                  isActive ? "bg-green-600 text-white" : "bg-transparent"
                }`
              }
            >
              {nav.name}
            </NavLink>
          ))}
        </div>
        <div className="bg-indigo-300 w-full overflow-scroll h-full flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
