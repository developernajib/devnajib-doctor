import React from "react";

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-5 active" href="/">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="nav-link mr-5" href="/about">
                                About
                            </a>
                        </li>
                        <li>
                            <a className="nav-link mr-5" href="/appointment">
                                Appointment
                            </a>
                        </li>
                        <li>
                            <a className="nav-link mr-5" href="/">
                                Reviews
                            </a>
                        </li>
                        <li>
                            <a className="nav-link mr-5" href="/">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a className="nav-link mr-4 text-white" href="/">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
