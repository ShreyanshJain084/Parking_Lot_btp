import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import HeaderCSS from "./header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const getProfileLink = () => {
    if (!currentUser) {
      return "/sign-in"; // Redirect to sign-in if user is not logged in
    } else {
      switch (currentUser.role) {
        case "Admin":
          return "/admin-profile";
        case "Manager":
          return "/manager-profile";
        case "Owner":
          return "/owner-profile";
        default:
          return "/user-profile";
      }
    }
  };

  return (
    <header
      className={`top-0 sticky w-full z-30 bg-white border-y-2 border-slate-300 ${HeaderCSS.head} `}
    >
      <div className="flex w-full justify-between items-center max-w-6xl mx-auto p-3 h-16">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-black">Welcome to&nbsp;</span>
            <span className="text-blue-400">SmartPark</span>
          </h1>
        </Link>
        {/* <div className="hidden">
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
        </div> */}
        
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-black hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-black hover:underline">
              About
            </li>
          </Link>

          <Link to={getProfileLink()}>
            <li className="text-black hover:underline">
              {currentUser ? "Profile" : "Sign In"}
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
