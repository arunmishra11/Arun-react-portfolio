import React from "react";
import Navbar from "./Navbar";
import "../styles/header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <>
      <header>
        <a href="#" className="nav-branding">
          Arun K Mishra
        </a>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <div className="hero-section">
        <div className="text-container">
          <h3>Hello!! my name is</h3>
          <h1>Arun Mishra</h1>
        </div>
      </div>
    </>
  );
}

export default Header;