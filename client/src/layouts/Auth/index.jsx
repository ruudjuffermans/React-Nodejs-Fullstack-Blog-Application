import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
