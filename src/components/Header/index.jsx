import React from 'react';
import "./header.css"

function Header() {
    return (
        <header className="section-header">
            <div className="container">
                <div className="navbar">
                    <div className="navbar-container align-middle w-container">
                        <div className="col lg-4 no-margin-bottom order-first no-padding-left col-logo md-12"><a href="index.html" className="brand w-nav-brand w--current"><img src="images/-asset-heloise-dark.svg" alt="" /></a></div>
                        <div className="col lg-4 no-margin-bottom flexh-justify-center">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <a href="index.html" className="nav-link w-nav-link w--current">Home</a>
                                <a href="about.html" className="nav-link w-nav-link">About</a>
                                <a href="contact.html" className="nav-link w-nav-link">Contact</a>
                                {/* <div data-hover="1" data-delay="0" data-w-id="e24582de-03e8-c195-8378-26a9116adac5" className="nav-dropdown w-dropdown">
                                    <div className="nav-link w-dropdown-toggle">
                                        <div>Grid style</div>
                                        <div className="dropdown-icon w-icon-dropdown-toggle"></div>
                                    </div>
                                    <nav className="dropdown-list w-dropdown-list"><a href="2-col.html" className="dropdown-link w-dropdown-link">2 columns</a><a href="3-col.html" className="dropdown-link w-dropdown-link">3 columns</a><a href="4-col.html" className="dropdown-link w-dropdown-link">4 columns</a><a href="5-col.html" className="dropdown-link w-dropdown-link">5 columns</a></nav>
                                </div> */}
                            </nav>
                        </div>
                        <div className="menu-button w-nav-button">
                            <div className="iconfont is-16px"><em className="iconfont__no-italize"></em></div>
                        </div>
                        <div className="col lg-4 no-margin-bottom flexh-justify-end no-padding-right hidden-xs hidden-md">
                            <a href="#" className="fa-brand margin-right is-body-text-color"></a>
                            <a href="#" className="fa-brand margin-right is-body-text-color"></a>
                            <a href="#" className="fa-brand is-body-text-color"></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;