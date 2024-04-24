import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { FaSignInAlt, FaTimes } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa6";
const Header = () => {
  const [navlist, setNavlist] = useState(false);
 
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex button1">
            <h4>
              <span>2</span> My List
            </h4>
            <button className="btn1">
              <FaSignInAlt /> Sign In
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavlist(!navlist)}>
              {navlist ? <FaTimes /> : <FaAlignJustify />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
