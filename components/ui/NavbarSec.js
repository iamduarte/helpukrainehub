import Link from "next/link";
import { useState } from "react";

function NavbarSec(props) {
  return (
    <>
      <div
        className={`navbar xshadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30"
        } fixed top-0 w-full z-10`}
      >
        <div className="navbar-start lg:w-1/6">
          <Link
            className="btn btn-ghost normal-case text-3xl text-yellow-300"
            href="/"
          >
            HelpUkraineHub
          </Link>
        </div>

        <div className="navbar-end hidden lg:flex space-x-4 font-semibold w-5/6">
          <ul className="menu menu-horizontal px-1 text-yellow-300 flex space-x-4 text-xl">
            {/* <li>
              <Link href="/">Home</Link>
            </li> */}
            <li>
              <Link href="/campaigns">All Campaigns</Link>
            </li>
            <li>
              <Link href="/campaigns/submit-new">Help Us Grow</Link>
            </li>
            <li>
              <Link href="/setup-api">API</Link>
            </li>
            <li>
              <Link href="/contacts">Contact Us</Link>
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
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/campaigns">All Campaigns</Link>
              </li>
              <li>
                <Link href="/campaigns/submit-new">Help Us Grow</Link>
              </li>
              <li>
                <Link href="/setup-api">API</Link>
              </li>
              <li>
                <Link href="/contacts">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarSec;
