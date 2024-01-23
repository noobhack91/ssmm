import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../constants/theme";
import { useState } from "react";
import ContentSidebar from "../elements/ContentSidebar";
import { Menu } from "./Menu";
import logo2 from "./../assets/images/logo-2.png";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});
const initialState = {
  activeSubmenu: "",
};

const Header2 = () => {
  const [drawer, setDrawer] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState();

  const submenu = (e) => {
    setMenu(e.currentTarget.id);
  };
  const [headerFix, setheaderFix] = React.useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);

  // For menu
  const [pathActive, setPathActive] = useState("1");
  const [state, setState] = useReducer(reducer, initialState);
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  return (
    <>
      <header className="site-header mo-left header style-2 header-transparent">
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              <div className="logo-header mostion logo-light">
                <Link to="index">
                  <img src={IMAGES.footerLogoImg} alt="" />
                </Link>
              </div>

              <button
                onClick={() => {
                  open == false ? setOpen("open") : setOpen(false);
                }}
                className={`navbar-toggler collapsed navicon justify-content-end ${open}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link className="search-link" id="quik-search-btn">
                    <i className="flaticon-loupe"></i>
                  </Link>
                  <div
                    className={`menu-btn navicon ${drawer}`}
                    onClick={() => {
                      drawer == false ? setDrawer("open") : setDrawer(false);
                    }}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  open == "open" ? "show" : false
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link to={"/"} className="logo-dark">
                    <img src={IMAGES.logo1} alt="" />
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar navbar-left">
                  {Menu.map((item, index) => {
                    let menuClass = item.dropmenu;
                    if (menuClass === "sub-menu-down") {
                      return (
                        <li
                          key={index}
                          className={`sub-menu-down  ${
                            state.activeSubmenu === item.title ? "open" : ""
                          } `}
                        >
                          <Link
                            to={"#"}
                            onClick={() => handleSubmenuActive(item.title)}
                          >
                            {item.title}
                          </Link>
                          <ul className="sub-menu">
                            {item.content &&
                              item.content.map((data, ind) => {
                                return (
                                  <li key={ind}>
                                    <Link to={data.to}>{data.subtitle}</Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={index}
                          className={`${
                            pathActive === item.path ? "active" : ""
                          }`}
                        >
                          <Link
                            to={item.to}
                            onClick={() => setPathActive(item.path)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
                <div className="dz-social-icon">
                  <ul>
                    <li>
                      <Link
                        to="https://www.facebook.com/dexignzone/"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.instagram.com/dexignzone/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://twitter.com/dexignzones/"
                        target="_blank"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.youtube.com/@dexignzone1723"
                        target="_blank"
                      >
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <ContentSidebar addclass={drawer == "open" ? "active" : false} />
      <div
        className="menu-close"
        onClick={() => {
          setDrawer(false);
        }}
      ></div>
    </>
  );
};

export default Header2;
