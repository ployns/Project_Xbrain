import { Outlet } from "react-router-dom";

import NavbarStudent from "../../../components/navbar/NavbarStudent";
import NavbarTutor from "../../../components/navbar/NavbarTutor";

import { useSelector } from "react-redux";
const Layout = ({ role }) => {
  let roleUser = localStorage.getItem("role");
  const checkRole = () => {
    if (roleUser === "student") {
      return <NavbarStudent />;
    } else if (roleUser === "tutor") {
      return <NavbarTutor />;
    }
  };

  return (
    <body className="flex flex-col min-h-screen ">
      <header>{checkRole()}</header>
      <main class="flex-grow">
        <Outlet />
      </main>
    </body>
  );
};

export default Layout;
