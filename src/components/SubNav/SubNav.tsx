import { Link } from "react-router-dom";

const SubNav = () => {
  const links = [
    { label: "Mother's Day Gifts" },
    { label: "Medical Care" },
    { label: "Whole Foods" },
    { label: "Amazon Basics" },
    { label: "Prime" },
    { label: "Best Sellers" },
    { label: "Today's Deals" },
    { label: "Buy Again" },
    { label: "Livestreams" },
    { label: "Pharmacy" },
    { label: "Household, Health & Baby Care" },
    { label: "Show By Interest" },
  ];
  return (
    <div className="flex flex-row bg-slate-700 py-3 justify-between">
      {links.map((link) => (
        <Link to="/" className="text-zinc-100 mx-2 font-semibold text-sm">
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default SubNav;
