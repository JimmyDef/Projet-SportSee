import { Outlet } from "react-router-dom";
import Header from "./../components/header/Header";
import Sidebar from "./../components/sidebar/Sidebar";

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
