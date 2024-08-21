import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../context/countrycontext";
import "./nav.css";

const Navbar = () => {
  const { setCountry, setSearch } = useContext(CountryContext);
  const [selectedValue, setSelectedValue] = useState("in");

  const handleChange = (event) => {
    setCountry(event.target.value);
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Daily Samachar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
          
        
             <form className="d-flex align-items-center w-100 justify-content-end mx-sm-0 mx-lg-3">
                <input
                  className="form-control me-2 search-input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success search-button"
                  onClick={(e) => {
                    e.preventDefault();
                    setSearch(document.querySelector(".search-input").value);
                  }}
                >
                  Search
                </button>
              </form>
           
              <select
                value={selectedValue}
                onChange={handleChange}
                className="form-select country-select"
              >
                <option value="in">India</option>
                <option value="us">USA</option>
                <option value="gb">UK</option>
                <option value="au">Australia</option>
                <option value="ca">Canada</option>
                <option value="de">Germany</option>
                <option value="fr">France</option>
                <option value="jp">Japan</option>
                <option value="ru">Russia</option>
                <option value="cn">China</option>
                <option value="kr">South Korea</option>
                <option value="br">Brazil</option>
                <option value="mx">Mexico</option>
                <option value="za">South Africa</option>
                <option value="at">Austria</option>
              </select>
                  
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
