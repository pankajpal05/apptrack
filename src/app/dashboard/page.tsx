import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is DashBoard Page",
  description: "Dashboard page in next js project",
};
const dashboard = () => {
  return (
    <div className="w-full  p-4 min-h-screen  bg-gray-50 flex flex-col ">
      <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
        <ul className="dark:text-black">
          <li></li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-4 h-4 mr-2 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              ></path>
            </svg>
            Add Product
          </li>
        </ul>
      </div>
      <div className="w-full h-20 my-2 text-center">
        <h1 className="text-2xl py-2 dark:text-black ">DashBoard</h1>
      </div>
    </div>
  );
};

export default dashboard;
