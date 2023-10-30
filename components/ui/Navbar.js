/* eslint-disable @next/next/no-html-link-for-pages */
import { Link } from "react-scroll";
import { useState } from "react";

function Navbar(props) {
  /*  const [colorChange, setColorChange] = useState(false);
    const screenHeight = window.innerHeight;

  const changeNavbarColor = () => {
    if (window.scrollY >= 50) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor); */

  return (
    <>
      <div
        className={`navbar xshadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30"
        } fixed top-0 w-full z-10`}
      >
        <div className="navbar-start lg:w-1/6">
          <Link
            className="btn btn-ghost normal-case text-3xl text-yellow-300"
            smooth
            to="landing"
          >
            HelpUkraineHub
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex space-x-4 font-semibold w-5/6">
          <ul className="menu menu-horizontal px-1 text-yellow-300 flex space-x-4 text-xl">
            {/* <li>
              <Link smooth to="landing">
                Home
              </Link>
            </li> */}
            <li>
              <Link smooth to="featured">
                Featured Campaigns
              </Link>
            </li>
            <li>
              <a href="/campaigns" className="relative inline-block">
                All Campaigns
              </a>
            </li>
            <li>
              <a href="/campaigns/submit-new" className="relative inline-block">
                Help Us Grow
              </a>
            </li>
            <li>
              <a href="/setup-api" className="relative inline-block">
                API
              </a>
            </li>
            <li>
              <Link smooth to="footer">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end lg:hidden ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-yellow-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] max-w-max p-2 text-yellow-300 bg-stone-600 shadow-lg rounded-box w-52 right-0 " /* glass-ul */
            >
              <li>
                <Link smooth to="landing">
                  Home
                </Link>
              </li>
              <li>
                <Link smooth to="featured">
                  Featured Campaigns
                </Link>
              </li>
              <li>
                <a href="/campaigns">All Campaigns</a>
              </li>
              <li>
                <a href="/campaigns/submit-new">Help Us Grow</a>
              </li>
              <li>
                <a href="/setup-api">API</a>
              </li>
              <li>
                <Link smooth to="footer">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
