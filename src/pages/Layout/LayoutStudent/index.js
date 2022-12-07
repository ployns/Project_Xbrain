import { Outlet } from "react-router-dom";
import NavbarStudent from "../../../components/navbar/NavbarStudent";

function Layout() {
  return (
    <body className="flex-col min-h-screen ">
      <header className="sticky top-0 z-50">
        <NavbarStudent />
      </header>
      <main className="flex-grow relative">
        <Outlet />
      </main>
    </body>
  );
}

export default Layout;
