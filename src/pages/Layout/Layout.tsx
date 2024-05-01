import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SubNav from "../../components/SubNav/SubNav";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SubNav />
      <main className="prose p-5">
        <Outlet />
        {/* <Toaster /> */}
      </main>
    </>
  );
};

export default Layout;
