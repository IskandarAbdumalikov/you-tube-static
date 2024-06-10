import React, { useRef, useState } from "react";
import "./header.scss";
import search from "../../../assets/search.svg";

const Header = ({ onSearch }) => {
  let [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <header>
      <nav className="header__nav container">
        <h1 className="header__nav__logo">LOGO</h1>
        <form onSubmit={handleSearch} className="header__nav__search__form">
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search..."
            type="text"
          />
          <button type="submit">
            <img width={20} src={search} alt="" />
          </button>
        </form>

        <button className="header__nav__btn">Admin</button>
      </nav>
    </header>
  );
};

export default Header;
