import React from "react";
import { Helmet } from "react-helmet";
import { Link,NavLink } from "react-router-dom";

function Side_header() {
  // window.location.reload="true";
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" to="/Dashboard">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title">Dashboard</span>
          </Link>
        </li>
        {/* <li className="nav-item nav-category">UI Elements</li> */}
        {/* <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#ui-basic"
            aria-expanded="false"
            aria-controls="ui-basic"
          >
            <i className="menu-icon mdi mdi-floor-plan" />
            <span className="menu-title">UI Elements</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/ui-features/buttons.html">
                  Buttons
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/ui-features/dropdowns.html">
                  Dropdowns
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  href="pages/ui-features/typography.html"
                >
                  Typography
                </a>
              </li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item nav-category">Forms and Datas</li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#form-elements"
            aria-expanded="false"
            aria-controls="form-elements"
          >
            <i className="menu-icon mdi mdi-card-text-outline" />
            <span className="menu-title">Form elements</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <Link className="nav-link" to="/Formeditor">
                  Form Editors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Addproduct">
                  Add Product
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <i className="menu-icon mdi mdi-chart-line" />
            <span className="menu-title">Charts</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/charts/chartjs.html">
                  ChartJs
                </a>
              </li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#tables"
            aria-expanded="false"
            aria-controls="tables"
          >
            <i className="menu-icon mdi mdi-table" />
            <span className="menu-title">Tables</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="tables">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Basictable">
                  Basic Table
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Usertable">
                  User Table
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Contacttable">
                  Contact Table
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Producttable">
                  Product Table
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#icons"
            aria-expanded="false"
            aria-controls="icons"
          >
            <i className="menu-icon mdi mdi-layers-outline" />
            <span className="menu-title">Icons</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="icons">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="pages/icons/mdi.html">
                  Mdi icons
                </a>
              </li>
            </ul>
          </div>
        </li> */}
        <li className="nav-item nav-category">pages</li>
        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-toggle="collapse"
            href="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <i className="menu-icon mdi mdi-account-circle-outline" />
            <span className="menu-title">User Pages</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="auth">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/">
                  {" "}
                  Login{" "}
                </Link>
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/Signup">
                  {" "}
                  Register{" "}
                </Link>
              </li>
            </ul>
          </div>
        </li>
        {/* <li className="nav-item nav-category">help</li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"
          >
            <i className="menu-icon mdi mdi-file-document" />
            <span className="menu-title">Documentation</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}

export default Side_header;
