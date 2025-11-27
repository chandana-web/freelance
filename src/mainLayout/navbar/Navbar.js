import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";

import "./Navbar.css"
import glogo from "../../assets/logo.png"
import blogo from "../../assets/logoB.png"
import menuIcon from "../../assets/menuIcon.png"
import dropdownIcon from "../../assets/dropDown.png"


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);
    const [sidebar, setSidebar]=useState(false);
    const [openMenu, setOpenMenu] = useState(null);
    const { pathname } = useLocation();
const isServicesPage = pathname === "/services";



  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeSidebar=()=>setSidebar(false);
  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`navbar fixed-top py-3 px-3 ${isServicesPage ? "services-navbar" : ""} ${scrolled ? "navbar-white shadow-sm" : "navbar-transparent"}
      `}
      >
        <div className='nav-container d-flex align-items-center justify-content-between w-100'>
        {/* Menu Icon - visible on mobile only */}
        <button
          className="btn d-lg-none"
          onClick={() => setSidebar(true)}
        >
          <img src={menuIcon} height="35" alt=''/>
        </button>

        {/* Logo Center */}
        <a className="navbar-brand  align-items-center me auto d-flex g-3" href="/">
          <img
            src={scrolled ? blogo : glogo}
            alt="logo"
            height="30"
          />
          <h3 className='ml-4'>Go Experts</h3>
        </a>

        {/* Join Button - Right */}
        <Link
          to="/join"
          className={`btn d-lg-none ${
            scrolled ? "btn-success text-white" : "btn-light text-dark"
          }`}
        >
          Join
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div className="collapse navbar-collapse d-none d-lg-flex">
          
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${scrolled ? "text-dark" : "text-white"}`} to="/">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link dropdown-toggle ${scrolled ? "text-dark" : "text-white"}`} role="button" data-bs-toggle="dropdown">Browse Jobs</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/services">Services</Link></li>
                <li><Link className="dropdown-item" to="/projects">Projects</Link></li>
                <li><Link className="dropdown-item" to="/job-view">Job View</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link dropdown-toggle ${scrolled ? "text-dark" : "text-white"}`} data-bs-toggle="dropdown">Domains</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Search for Domains</Link></li>
                <li><Link className="dropdown-item" to="/about">Find a Domain Owner</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link dropdown-toggle ${scrolled ? "text-dark" : "text-white"}`} role="button" data-bs-toggle="dropdown">Pages</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                <li><Link className="dropdown-item" to="/blog">Blog</Link></li>
                <li><Link className="dropdown-item" to="/terms">Terms</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <span className={`nav-link dropdown-toggle ${scrolled ? "text-dark" : "text-white"}`} data-bs-toggle="dropdown">Profile</span>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/dashboard">My Dashboard</Link></li>
                <li><Link className="dropdown-item" to="/become-seller">Become a Seller</Link></li>
              </ul>
            </li>
          </ul>
          
          <Link to="/signin" className={`btn me-3 ${isServicesPage ? "services-navbar" : ""} ${scrolled ? "btn-outline-dark" : "btn-outline-light"}`}>Sign In</Link>
          <Link to="/join" className={`btn ${isServicesPage ? "services-navbar" : ""} ${scrolled ? "btn-success text-white" : "btn-light text-dark"}`}>Join</Link>
        </div>
        </div>
      </nav>

      {/* SIDEBAR + BACKDROP */}
      {sidebar && (
        <div className="sidebar-wrapper" onClick={closeSidebar}></div>
      )}

      <div className={`sidebar ${sidebar ? "show" : ""}`} onClick={(e)=>e.stopPropagation()}>
        

        <ul className="list-unstyled mt-3 fs-5">

  <li><Link className="join-btn" to="/join" onClick={closeSidebar}>Join GoExperts</Link></li>

  {/* Home - not a dropdown */}
  <li>
    <Link to="/" onClick={closeSidebar}>Home</Link>
  </li>

  {/* Browse Jobs Dropdown */}
  <li className="sidebar-item">
    <button className="sidebar-toggle" onClick={() => setOpenMenu(openMenu === "jobs" ? null : "jobs")}>
      Browse Jobs 
      <img 
  src={dropdownIcon} 
  className={`dropdown-icon ${openMenu === "jobs" ? "rotate" : ""}`} 
  alt="dropdown" 
/>

    </button>
    {openMenu === "jobs" && (
      <ul className="submenu">
        <li><Link to="/services" onClick={closeSidebar}>Services</Link></li>
        <li><Link to="/projects" onClick={closeSidebar}>Projects</Link></li>
        <li><Link to="/job-view" onClick={closeSidebar}>Job View</Link></li>
      </ul>
    )}
  </li>

  {/* Domains */}
  <li className="sidebar-item">
    <button className="sidebar-toggle" onClick={() => setOpenMenu(openMenu === "domains" ? null : "domains")}>
      Domains
      <img 
  src={dropdownIcon} 
  className={`dropdown-icon ${openMenu === "jobs" ? "rotate" : ""}`} 
  alt="dropdown" 
/>
    </button>
    {openMenu === "domains" && (
      <ul className="submenu">
        <li><Link to="/">Search Domains</Link></li>
        <li><Link to="/about">Find Owner</Link></li>
      </ul>
    )}
  </li>

  {/* Pages */}
  <li className="sidebar-item">
    <button className="sidebar-toggle" onClick={() => setOpenMenu(openMenu === "pages" ? null : "pages")}>
      Pages
      <img 
  src={dropdownIcon} 
  className={`dropdown-icon ${openMenu === "jobs" ? "rotate" : ""}`} 
  alt="dropdown" 
/>
    </button>
    {openMenu === "pages" && (
      <ul className="submenu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/terms">Terms</Link></li>
      </ul>
    )}
  </li>

  {/* Profile */}
  <li className="sidebar-item">
    <button className="sidebar-toggle" onClick={() => setOpenMenu(openMenu === "profile" ? null : "profile")}>
      Profile
      <img 
  src={dropdownIcon} 
  className={`dropdown-icon ${openMenu === "jobs" ? "rotate" : ""}`} 
  alt="dropdown" 
/>
    </button>
    {openMenu === "profile" && (
      <ul className="submenu">
        <li><Link to="/dashboard" onClick={closeSidebar}>Dashboard</Link></li>
        <li><Link to="/become-seller" onClick={closeSidebar}>Become Seller</Link></li>
      </ul>
    )}
  </li>

  <li><Link to="/signin" onClick={closeSidebar}>Sign In</Link></li>
</ul>

      </div>
    </>
  )
}

export default Navbar