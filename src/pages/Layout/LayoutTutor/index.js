import { Outlet } from "react-router-dom";
import NavbarTutor from "../../../components/navbar/NavbarTutor";

function Layout() {
  return (
    <body class="flex flex-col min-h-screen ">
      <header className="sticky top-0 z-50">
        <NavbarTutor />
      </header>
      <main class="flex-grow">
        <Outlet />
      </main>
    </body>
  );
}

export default Layout;
