import { useContext } from "react";
import { FaRegUser, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = [
    <li key={1}>
      <NavLink
        className="font-bibas_neue tracking-widest text-black text-md"
        to="/"
      >
        Home
      </NavLink>
    </li>,
    <li key={2}>
      <NavLink
        className="font-bibas_neue tracking-widest text-black text-md"
        to="/services"
      >
        Services
      </NavLink>
    </li>,
    <li key={3}>
      <NavLink
        className="font-bibas_neue tracking-widest text-black text-md"
        to="/articles"
      >
        Article
      </NavLink>
    </li>,
    <li key={4}>
      <NavLink
        className="font-bibas_neue tracking-widest text-black text-md"
        to="/profile"
      >
        My Profile
      </NavLink>
    </li>,
  ];

  return (
    <div className="w-11/12 mx-auto navbar bg-base-100">
      <div className="navbar-start">
        <Link to="/" className="text-xl md:text-2xl lg:text-4xl font-bibas_neue font-extrabold text-navColor tracking-widest leading-tight">
          The <br /> Career <br /> Advisory{" "}
          <span className="text-btnColor">..</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          <div className="flex gap-3 items-center">
            <div className="relative group w-8 md:w-10 h-8 md:h-10">
              {/* User Image or Icon */}
              {user?.photoURL ? (
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={user.photoURL}
                  alt="User Avatar"
                />
              ) : (
                <FaUser className="w-10 h-10 rounded-full text-gray-500" />
              )}

              {/* Display Name */}
              <span className="absolute hidden group-hover:flex items-center justify-center top-9 left-0 text-btnColor text-sm font-semibold rounded-lg px-2 py-1">
                {user?.displayName}
              </span>
            </div>

            {/* Logout Button */}
            <div
              onClick={logOut}
              className="flex items-center gap-2 font-bibas_neue tracking-widest px-2 md:px-3 py-2 bg-btnColor text-white rounded-full cursor-pointer"
            >
              Logout
            </div>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="flex items-center gap-2 font-bibas_neue tracking-widest px-3 py-2 bg-btnColor text-white rounded-full cursor-pointer"
          >
            <FaRegUser />
            <h2>Login</h2>
          </Link>
        )}

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-0 m-0 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
