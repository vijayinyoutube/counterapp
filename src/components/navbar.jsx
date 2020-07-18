import React, { Component } from "react";

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        <img
          src="https://avatars3.githubusercontent.com/u/58719230?s=400&u=393ed05c58e8f6b5ad1a0dde9d73a62a369f1163&v=4"
          width="45"
          height="45"
          alt="logo"
          loading="lazy"
        />
        <span> </span>
        Items Selected : <span></span>
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>{" "}
      <form class="form-inline my-2 my-lg-0">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
