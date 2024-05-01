import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-950 px-5 py-2">
      <Link
        className="mx-3 flex-wrap flex text-3xl text-zinc-100 font-bold"
        to="/"
      >
        amazon
      </Link>

      <div className="flex flex-col">
        <p className="text-zinc-100 text-sm">Deliver to Jon</p>
        <p className="text-zinc-100 font-bold">Lowell 72745</p>
      </div>

      <div className="w-1/2">
        <SearchBar />
      </div>

      <div className="flex flex-col ml-3">
        <p className="text-zinc-100 font-bold">EN</p>
      </div>
      <div className="flex flex-col">
        <p className="text-zinc-100 text-sm">Hello, Jon</p>
        <p className="text-zinc-100 font-bold">Accounts and Lists</p>
      </div>
      <div className="flex flex-col">
        <p className="text-zinc-100 text-sm">Returns</p>
        <p className="text-zinc-100 font-bold">& Orders</p>
      </div>
      <div className="flex flex-row items-end">
        <FiShoppingCart className="text-zinc-100 text-3xl mr-2" />
        <p className="text-zinc-100 font-bold">Cart</p>
      </div>

      {/* <MenuDrawer placement="end" /> */}
    </div>
  );
};

export default Navbar;
