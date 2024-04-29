import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [{ label: "A" }];
  return (
    <div className="flex flex-row justify-between bg-gradient-to-r from-sky-400 to-sky-600 px-20">
      <div className="w-48 bg-sky-700 pt-10 pb-2">
        <Link
          className="mx-3 flex-wrap flex text-2xl text-zinc-100 font-bold italic"
          to="/"
        >
          Amazon
        </Link>
      </div>

      {/* <MenuDrawer placement="end" /> */}
    </div>
  );
};

export default Navbar;
