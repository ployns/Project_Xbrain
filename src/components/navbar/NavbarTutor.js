import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function NavbarStudent() {
  const [showProfile, setShowProfile] = useState(false);
  const handleClick = () => {
    setShowProfile(!showProfile);
  };

  return (
    // <Router>
    <nav className="bg-primary-80 px-2 sm:px-4 py-2.5 w-full z-20 top-0 left-0">
      <div className="w-full bg-primary-100 flex flex-row">
        {/* Logo */}
        <div className="bg-primary-80 w-full">
          <Link
            to={"/homestudent"}
            className="flex items-center place-self-start"
          >
            <span className="self-center text-5xl font-body font-extrabold whitespace-nowrap dark:text-white text-primary-50">
              X-brain
            </span>
          </Link>
        </div>
        {/* Menu right */}
        <div className="bg-primary-80 w-full flex flex-row-reverse item-center ">
          {/* Search */}

          <Link
            to={"/search"}
            className="font-body font-semibold text-white-100 text-xl ml-2 mr-2 pl-2 pr-2 pt-2 hover:bg-primary-100 hover:rounded-md"
          >
            <svg
              className="h-8 w-8 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </Link>

          {/* Dropdown */}
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={handleClick}
                type="button"
                className="flex flex-row ml-2 mr-2 pl-2 pr-2 pt-2 pb-2 hover:bg-primary-100 hover:rounded-md cursor-pointer"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <div className="font-body font-semibold text-white-100 text-xl ">
                  <svg
                    className="h-8 w-8 text-white fill-white-100 border-4 rounded-md"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="font-body font-semibold text-white-100 text-xl pt-1">
                  <svg
                    className="h-6 w-6 text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </button>
            </div>
            {/* Show Dropdown   */}
            {showProfile && (
              <div
                className="absolute right-0 z-10 w-56 mt-4 origin-top-right rounded-md bg-primary-80 shadow-xl ring-1 ring-white-100 ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <Link
                    to={"/profilestudent"}
                    className="block px-4 py-2 font-body text-lg font-medium text-white-100 hover:bg-primary-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    โปรไฟล์
                  </Link>
                  <Link
                    to={"/historystudent/1"}
                    className="block px-4 py-2 font-body text-lg font-medium text-white-100 hover:bg-primary-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    ประวัติการสมัคร
                  </Link>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 font-body text-lg font-medium text-white-100 hover:bg-primary-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            to={"/contact"}
            className="font-body font-semibold text-white-100 text-xl ml-2 mr-2 pl-2 pr-2 pt-3 hover:bg-primary-100 hover:rounded-md "
          >
            ติดต่อสอบถาม
          </Link>
          <Link
            to={"/community"}
            className="font-body font-semibold text-white-100 text-xl ml-2 mr-2 pl-2 pr-2 pt-3 hover:bg-primary-100 hover:rounded-md "
          >
            ข่าวสาร
          </Link>
          <Link
            to={"/search"}
            className="font-body font-semibold text-white-100 text-xl ml-2 mr-2 pl-2 pr-2 pt-3 hover:bg-primary-100 hover:rounded-md "
          >
            หา Tutor
          </Link>
          <Link
            to={"/homestudent"}
            className="font-body font-semibold text-white-100 text-xl ml-2 mr-2 pl-2 pr-2 pt-3 hover:bg-primary-100 hover:rounded-md "
          >
            หน้าแรก
          </Link>
        </div>
      </div>
    </nav>
    // </Router>
  );
}

{
  /* <--Logo--> */
}
{
  /* <a href="/home" className="flex items-center place-self-start">
<span className="self-center text-5xl font-body font-extrabold whitespace-nowrap dark:text-white text-primary-50">X-brain</span>
</a>

<div className="flex place-self-end">
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">sds</a>
            </div>
            </div> */
}
