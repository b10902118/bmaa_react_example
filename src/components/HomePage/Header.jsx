"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      title: "關於身心中軸覺察",
      href: "/good-points",
      hasSubmenu: true,
      submenu: [
        { title: "練習特色", href: "/good-points" },
        { title: "科學證據", href: "/evidence" },
        { title: "採訪報導", href: "/news" },
      ],
    },
    { title: "課程介紹", href: "/class-information" },
    { title: "學員心得", href: "/students-feedback" },
    { title: "團隊成員", href: "/members" },
    { title: "聯絡我們", href: "/contact-us" },
  ];

  return (
    <header id="masthead">
      <p className="main-title bhf-hidden" itemProp="headline">
        <a href="https://bmaa.tw" title="臺灣身心中軸覺察發展中心" rel="home">
          臺灣身心中軸覺察發展中心
        </a>
      </p>
      <div className="elementor elementor-2535">
        <section
          className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-f8ae2a9 elementor-section-height-min-height elementor-section-content-middle she-header-yes elementor-section-full_width elementor-section-height-default elementor-section-items-middle header"
          id="sticky_me"
          style={{}}
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bf4c8ea ob-is-e3">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-3324b4d ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">
                      <a href="https://bmaa.tw/">臺灣身心中軸覺察發展中心</a>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-4e1a365 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                  <div className="elementor-widget-container">
                    <div className="elementor-heading-title elementor-size-default">
                      <a href="https://bmaa.tw/">
                        Taiwan Body-Mind Axial Awareness Center
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-46b3760 ob-is-e3">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-2ae91ee hfe-nav-menu__align-left hfe-submenu-icon-arrow hfe-submenu-animation-none hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet ob-has-background-overlay elementor-widget elementor-widget-navigation-menu">
                  <div className="elementor-widget-container">
                    <div className="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__none">
                      <div
                        role="button"
                        className="hfe-nav-menu__toggle elementor-clickable"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="screen-reader-text">Menu</span>
                        <div className="hfe-nav-menu-icon">
                          <i
                            aria-hidden="true"
                            className="fas fa-align-justify"
                          ></i>
                        </div>
                      </div>
                      <nav className="hfe-nav-menu__layout-horizontal hfe-nav-menu__submenu-arrow hfe-dropdown">
                        <ul id="menu-1-2ae91ee" className="hfe-nav-menu">
                          <li
                            id="menu-item-1082"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children parent hfe-has-submenu hfe-creative-menu parent-has-child"
                          >
                            <div className="hfe-has-submenu-container">
                              <a
                                href="https://bmaa.tw/good-points/"
                                className="hfe-menu-item"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                關於身心中軸覺察
                                <span className="hfe-menu-toggle sub-arrow hfe-menu-child-0">
                                  <i className="fa"></i>
                                </span>
                              </a>
                            </div>
                            <ul
                              className="sub-menu"
                              style={{ position: "absolute" }}
                            >
                              {
                              [
                                { title: "練習特色", href: "https://bmaa.tw/good-points/" },
                                { title: "科學證據", href: "https://bmaa.tw/evidence/" },
                                { title: "採訪報導", href: "https://bmaa.tw/news/" }
                              ].map((sub, idx) => (
                                <li
                                  key={sub.title}
                                  className="menu-item menu-item-type-post_type menu-item-object-page hfe-creative-menu"
                                >
                                  <a
                                    href={sub.href}
                                    className="hfe-sub-menu-item"
                                  >
                                    {sub.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                          {[
                            { title: "課程介紹", href: "https://bmaa.tw/className-information/" },
                            { title: "學員心得", href: "https://bmaa.tw/students-feedback/" },
                            { title: "團隊成員", href: "https://bmaa.tw/members/" },
                            { title: "聯絡我們", href: "https://bmaa.tw/contact-us/" },
                          ].map((item, idx) => (
                            <li
                              key={item.title}
                              className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"
                            >
                              <a
                                href={item.href}
                                className="hfe-menu-item"
                              >
                                {item.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
  );

  return (
    <header
      id="masthead"
      itemScope
      itemType="https://schema.org/WPHeader"
      className="site-header"
    >
      <div className="main-title-hidden">
        <a href="/" title="臺灣身心中軸覺察發展中心" rel="home">
          臺灣身心中軸覺察發展中心
        </a>
      </div>

      <section className="header-section sticky-header" id="sticky_me">
        <div className="container">
          <div className="header-row">
            {/* Logo/Brand Section */}
            <div className="brand-column">
              <div className="brand-content">
                <h1 className="site-title">
                  <a href="/">臺灣身心中軸覺察發展中心</a>
                </h1>
                <h2 className="site-subtitle">
                  <a href="/">Taiwan Body-Mind Axial Awareness Center</a>
                </h2>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="navigation-column">
              <nav className="main-navigation">
                {/* Mobile Menu Toggle */}
                <button
                  className="mobile-menu-toggle"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <i className="fas fa-align-justify" aria-hidden="true"></i>
                </button>

                {/* Navigation Menu */}
                <ul
                  className={`nav-menu ${
                    isMobileMenuOpen ? "mobile-open" : ""
                  }`}
                >
                  {navigationItems.map((item, index) => (
                    <li
                      key={index}
                      className={`nav-item ${
                        item.hasSubmenu ? "has-submenu" : ""
                      }`}
                    >
                      <a href={item.href} className="nav-link">
                        {item.title}
                        {item.hasSubmenu && (
                          <span className="submenu-arrow">
                            <i className="fa" aria-hidden="true"></i>
                          </span>
                        )}
                      </a>

                      {item.hasSubmenu && (
                        <ul className="submenu">
                          {item.submenu.map((subItem, subIndex) => (
                            <li key={subIndex} className="submenu-item">
                              <a href={subItem.href} className="submenu-link">
                                {subItem.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
