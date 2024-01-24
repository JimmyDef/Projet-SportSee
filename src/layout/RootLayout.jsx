import { Outlet } from "react-router-dom";
import Header from "./../components/Header";
import Sidebar from "./../components/Sidebar";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
