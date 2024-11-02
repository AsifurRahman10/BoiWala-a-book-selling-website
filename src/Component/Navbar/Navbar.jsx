import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const link = (
    <>
      <NavLink className="" to="/">
        Home
      </NavLink>

      <NavLink className="ml-5" to="/listedBooks">
        Listed Books
      </NavLink>
      <NavLink className="ml-5" to="/pagesToRead">
        Pages to Read
      </NavLink>
    </>
  );

  return (
    <div className="navbar my-8">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl"
          >
            {link}
          </ul>
        </div>
        <a className="md:text-3xl font-bold">Boi-Wala</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">{link}</ul>
      </div>
      <div className="navbar-end gap-2 md:gap-6 ">
        <button className="btn md:px-8 bg-[#23BE0A] text-white text-lg">
          Sign Up
        </button>
        <button className="btn md:px-8 bg-[#59C6D2] text-white text-lg">
          Sign In
        </button>
      </div>
    </div>
  );
};
