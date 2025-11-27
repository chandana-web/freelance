import React from 'react'
import "./Footer.css"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP LINKS */}
      <div className="footer-top container d-flex justify-content-between align-items-center">
        <div className="footer-links">
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Site Map</a>
        </div>

        <div className="footer-social">
          <span>Follow us </span>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

      <hr className="footer-line" />

      {/* MAIN GRID */}
      <div className="footer-main container">
        <div className="footer-col">
          <h5>About</h5>
          <a href="/">Careers</a>
          <a href="/">Press & News</a>
          <a href="/">Partnerships</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Investor Relations</a>
        </div>

        <div className="footer-col">
          <h5>Categories</h5>
          <a href="/">Graphics & Design</a>
          <a href="/">Digital Marketing</a>
          <a href="/">Writing & Translation</a>
          <a href="/">Video & Animation</a>
          <a href="/">Music & Audio</a>
          <a href="/">Programming & Tech</a>
          <a href="">Data</a>
          <a href="/">Business</a>
          <a href="/">Lifestyle</a>
        </div>

        <div className="footer-col">
          <h5>Support</h5>
          <a href="/">Help & Support</a>
          <a href="/">Trust & Safety</a>
          <a href="/">Selling</a>
          <a href="/">Buying</a>
        </div>

        <div className="footer-col">
          <h5>Subscribe</h5>
          <div className="footer-subscribe">
            <input type="email" placeholder="Your email address" />
            <button>Send</button>
          </div>

          <h5 className="mt-4">Apps</h5>
          <a href="/"><FaApple /> &nbsp; iOS App</a>
          <a href="/"><FaGooglePlay /> &nbsp; Android App</a>
        </div>
      </div>

      <div className="footer-bottom container d-flex justify-content-between">
        <p>© 2025 YourBrand. All rights reserved.</p>

        <div className="footer-settings d-flex gap-3">
          
          <select>
            <option>English</option>
          </select>
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      <button className="backtop-btn" onClick={() => window.scrollTo(0, 0)}>↑</button>
    </footer>
  )
}

export default Footer