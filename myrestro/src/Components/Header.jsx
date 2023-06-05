import React from "react";
import { Helmet } from "react-helmet";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Header() {
  const redirect = useNavigate();
  const logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    toast.success("Logout Successfull !!!");
    return redirect('/');
  };
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link
            to="/"
            className="logo d-flex align-items-center me-auto me-lg-0"
          >
            <h1>
              Yummy Restro<span>.</span>
            </h1>
          </Link>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/Events">Events</NavLink>
              </li>
              <li>
                <NavLink to="/Chefs">Chefs</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
              {/* <li>
              <i className="fa fa-user" to="/Profile"><br/>{localStorage.getItem('name')}</i>
              </li> */}
              <li>
                <NavLink className="btn-book-a-table" to="/Booking">
                  Book a Table
                </NavLink>
              </li>
              {(() => {
                if (localStorage.getItem("id")) {
                  return (
                    <li>
                      <Link
                        to="/Profile"
                        style={{ color: "black", padding: "10px" }}
                      >
                        {localStorage.getItem("name")}
                        <i
                          className="fa fa-user-circle"
                          style={{ color: "black" }}
                        ></i>
                      </Link>
                    </li>
                  );
                }
              })()}
            </ul>
            <ul>
              {(() => {
                if (localStorage.getItem("id")) {
                  return (
                    <li>
                      <NavLink
                        className="btn-book-a-table"
                        to="/"
                        onClick={logout}
                      >
                        Sign Out
                      </NavLink>
                    </li>
                  );
                } else {
                  return (
                    <li>
                      <NavLink className="btn-book-a-table" to="/Signin">
                        Sign In
                      </NavLink>
                    </li>
                  );
                }
              })()}
            </ul>
          </nav>
          {/* .navbar */}
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
