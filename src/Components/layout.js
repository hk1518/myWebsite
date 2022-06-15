import * as React from "react";
import { Link } from "gatsby";
import "./layout.css";

const Layout = ({ pageTitle, children, titlePage }) => {
  return (
    <div className="container">
      <title>{titlePage}</title>
      <header className="site-title">{titlePage}</header>
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
              Home
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
              About
            </Link>
          </li>
          <li className="nav-link-item">
            <Link to="/blog" className="nav-link-text">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export { Layout };
