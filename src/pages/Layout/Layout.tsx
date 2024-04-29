import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="prose p-5">
        <Outlet />
        {/* <Toaster /> */}
      </main>
    </>
  );
};

export default Layout;
