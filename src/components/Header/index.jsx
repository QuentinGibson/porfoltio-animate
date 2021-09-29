import React from 'react';
import { NavLink } from 'react-router-dom';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./header.css"

function Header() {
    return (
        <header className="section-header">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-container align-middle w-container">
                        <div className="col lg-4 no-margin-bottom order-first no-padding-left col-logo md-12">
                            <a href="/" className="brand w-nav-brand w--current">
                                <h2>Quentin Gibson</h2>
                            </a>
                        </div>
                        <div className="col lg-4 no-margin-bottom flexh-justify-center">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <NavLink
                                    activeClassName="w--current"
                                    className="nav-link w-nav-link"
                                    to="/"
                                    exact
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    activeClassName="w--current"
                                    className="nav-link w-nav-link"
                                    to="/about"
                                    exact
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    activeClassName="w--current"
                                    className="nav-link w-nav-link"
                                    to="/contact"
                                    exact
                                >
                                    Contact
                                </NavLink>
                            </nav>
                        </div>
                        <div className="col lg-4 no-margin-bottom flexh-justify-end no-padding-right hidden-xs hidden-md">
                            <a href="facebook.com" title="facebook" className="fa-brand margin-right is-body-text-color">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="instagram.com" className="fa-brand margin-right is-body-text-color">
                                <FontAwesomeIcon icon={faInstagram}  />
                            </a>
                            <a href="twitter.com" className="fa-brand is-body-text-color">
                                <FontAwesomeIcon icon={faTwitter}  />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;