import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-green-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            EasyExporter
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-green-200 hover:text-red-800"
            activeClassName="text-green-100 bg-green-700"
          >
            Blog
          </NavLink>
          <NavLink
            to="/About"
            className="inline-flex item-center py-3 px-3 my-6 rounded text-green-200 hover:text-red-800"
            activeClassName="text-green-100 bg-green-700"
          >
            About Us!
          </NavLink>

        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.youtube.com/channel/UClYs40syVBpxezvSe3RiCrA"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/company/66748837/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/mastan.patel.5"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
