import React, { useEffect, useReducer } from "react";
import { IMAGES } from "../constants/theme";
import { Link } from "react-router-dom";
import ContentSidebar from "../elements/ContentSidebar";
import { useState } from "react";
import { Menu } from "./Menu";
import logo2 from "./../assets/images/logo-2.png";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});
const initialState = {
  activeSubmenu: "",
};

const Header = () => {
  const [open, setOpen] = useState();
  const [openSide, setOpenSide] = useState(false);
  const [headerFix, setheaderFix] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setheaderFix(window.scrollY > 50);
    });
  }, []);
  // For menu
  const [pathActive, setPathActive] = useState();

  const [state, setState] = useReducer(reducer, initialState);
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  function LogoComponent() {
    const [logoVal, setLogoVal] = useState("");
    useEffect(() => {
      const setLogo = document
        .querySelector("body")
        .getAttribute("data-primary");
      setLogoVal(setLogo);
    }, []);
    return (
      <Link to="/">
        {logoVal === "color-skin-2" ? (
          <img src={logo2} alt="" />
        ) : (
          <img style={{ height: "80px", width: "80px" }} src={logo2} alt="" />
        )}
      </Link>
    );
  }
  return (
    <>
      <header className="site-header mo-left header style-1">
        <div
          className={`sticky-header main-bar-wraper navbar-expand-lg ${
            headerFix ? "is-fixed" : ""
          }`}
        >
          <div className="main-bar clearfix">
            <div className="container-fluid clearfix">
              <div className="logo-header mostion logo-dark">
                <LogoComponent />
              </div>
              <button
                onClick={() => {
                  setOpen(!open);
                }}
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  !open ? "open" : ""
                }`}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className="extra-nav">
                <div className="extra-cell">
                  <div className="search-inhead">
                    <div className="dz-quik-search">
                      <form action="#">
                        <input
                          name="search"
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span id="quik-search-remove">
                          <i className="ti-close"></i>
                        </span>
                      </form>
                    </div>
                    <Link className="search-link" id="quik-search-btn" to={"#"}>
                      <i className="flaticon-loupe"></i>
                    </Link>
                  </div>
                  <div
                    onClick={() => setOpenSide(!openSide)}
                    className={`menu-btn navicon ${openSide ? "open" : ""}`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  open ? "" : "show"
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header logo-dark">
                  <Link to={"/"}>
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
                          //className={`${pathActive === item.path ? 'active' : ''}`}
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
      <ContentSidebar openSide={openSide} />
      <div className="menu-close" onClick={() => setOpenSide(!openSide)}></div>
    </>
  );
};

export default Header;
