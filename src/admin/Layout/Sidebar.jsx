// import SidebarMenu from "react-bootstrap-sidebar-menu";
// const SideBar = () => {
//   return <SideBar />;
// };
// export default SideBar;
import React from "react";

const AdminSidebar = () => {
  return (
    <div className="bg-dark text-white vh-100" style={{ width: "250px" }}>
      <ul className="nav flex-column p-3">
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="#">
            Dashboard
          </a>
        </li>
        <li className="nav-item mb-2">
          <a className="nav-link text-white" href="/admin/appoinments">
            Appoinments
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
