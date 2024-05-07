import React from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Navigation = () => {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto">
          <ul className="flex">
            <li className="mr-6">
              <Link
                to="/customerManagement"
                className="text-white hover:text-gray-200"
              >
                Customer Management
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-200">
                Purchase Order Management
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/" className="text-white hover:text-gray-200">
                Shipping Details Management
              </Link>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </div>
      </nav>
      <Dashboard />
    </>
  );
};

export default Navigation;
