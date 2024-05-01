import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="w-full rounded-lg border-zinc-100 h-10 bg-slate-100 flex flex-row justify-between mx-5">
      <select className="bg-zinc-200 w-14 rounded-l-md px-2" name="" id="">
        <option className="text-lg font-thin">All</option>
      </select>
      <input className="h-10" />
      <button className="bg-yellow-400 w-10 flex flex-row justify-center items-center rounded-r-md">
        <IoIosSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchBar;
