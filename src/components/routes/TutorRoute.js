import { Outlet } from "react-router-dom";

import Navbarstudent from "../../components/navbar/NavbarStudent";
import NavbarTutor from "../../components/navbar/NavbarTutor";

import { useSelector } from "react-redux";
const Layout = ({ role }) => {
  //   var { user } = useSelector((state) => ({ ...state }));
  let role = localStorage.getItem("role");
  const checkRole = () => {
    if (role === "student") {
      return <Navbarstudent />;
    } else if (role === "tutor") {
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
