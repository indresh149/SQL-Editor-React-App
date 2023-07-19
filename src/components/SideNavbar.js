import React from "react";
import "./SideNavbar.css";
import { exit, logo } from "../assets/svgFile";
import { Link } from "react-router-dom";

const links = [
    { label: "Getting Started", value: "" },
    { label: "Tables", value: "tables" },
    { label: "Query Editor", value: "query-editor" }
];

const SideNavbar = () => {
    return (
        <div className="side-navbar">
            <div className="app-logo">{logo()}</div>
            <hr className="h-line" />
            <div className="nav-links">
                <ul className="link-items">
                    <Link to="/">
                        <li className="link-item">Home</li>
                    </Link>
                    <Link to="/tables">
                        <li className="link-item">Tables</li>
                    </Link>
                    <Link to="/sql-editor">
                        <li className="link-item">Query Editor</li>
                    </Link>
                </ul>
            </div>
            <div className="logout">
                <span className="icon">{exit()}</span>
                <span className="text">Logout</span>
            </div>
        </div>
    );
};

export default SideNavbar;
