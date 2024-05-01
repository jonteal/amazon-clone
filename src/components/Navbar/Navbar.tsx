import { Link } from "react-router-dom";

import { FiShoppingCart } from "react-icons/fi";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-950 px-5">
      <Link
        className="mx-3 flex-wrap flex text-2xl text-zinc-100 font-bold"
        to="/"
      >
        amazon
      </Link>

      <div className="flex flex-col">
        <p className="text-zinc-100">Deliver to Jon</p>
        <p className="text-zinc-100 font-bold">Lowell 72745</p>
      </div>

      <SearchBar />

      <div className="flex flex-col">
        <p className="text-zinc-100 font-bold">EN</p>
      </div>
      <div className="flex flex-col">
        <p className="text-zinc-100">Hello Jon</p>
        <p className="text-zinc-100 font-bold">Accounts and Lists</p>
      </div>
      <div className="flex flex-col">
        <p className="text-zinc-100">Returns</p>
        <p className="text-zinc-100 font-bold">& Orders</p>
      </div>
      <div className="flex flex-row items-end">
        <FiShoppingCart className="text-zinc-100 text-3xl mr-2" />
        <p className="text-zinc-100">Cart</p>
      </div>

      {/* <MenuDrawer placement="end" /> */}
    </div>
  );
};

export default Navbar;
