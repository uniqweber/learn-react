import { Outlet } from "react-router";

const Placeholder = () => {
  return (
    <div className="p-5 w-full h-full ">
      <Outlet />
    </div>
  );
};

export default Placeholder;
