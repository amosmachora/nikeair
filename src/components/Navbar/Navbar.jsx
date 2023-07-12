import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { GiHamburgerMenu, GiZeusSword } from "react-icons/gi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="App__bg App__navbar">
      <div className="nikelogo">
        <img src={images.NikeLogo} alt="Nike Logo" className="logo" />
      </div>

      <ul className="app_navbar_links">
        <li className="p__inter links ">
          <a href="#women" className="target">
            Women
          </a>
        </li>
        <li className="p__inter links">
          <a href="#Men"> Men </a>
        </li>
        <li className="p__inter links">
          <a href="#Kids"> Kids </a>
        </li>
        <li className="p__inter links">
          <a href="#Collections"> Collections </a>
        </li>
      </ul>

      <div className="app_navbar_smallscreen">
        <GiHamburgerMenu
          className="hambugermenu"
          color="#000000"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app_navbar_smallscreen_overlay flex_center">
            <GiZeusSword
              color="#FFFFFF"
              className="overlay_close"
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app_navbar_links_smallscreen">
              <li className="p__inter links_smallscreen ">
                <a href="#women">Women</a>
              </li>
              <li className="p__inter links_smallscreen">
                <a href="#Men"> Men </a>
              </li>
              <li className="p__inter links_smallscreen">
                <a href="#Kids"> Kids </a>
              </li>
              <li className="p__inter links_smallscreen">
                <a href="#Collections"> Collections </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
