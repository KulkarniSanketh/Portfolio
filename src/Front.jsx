import React, { useState } from "react";
import instadsecond from "./Images/instagram 2.png";
import github from "./Images/github2.svg";
import linkdin from "./Images/linkedin2.png";
import leetcode from './Images/leetcode.png'
import gfg from './Images/gfg.png'


export default function Front() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleViewResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="portfolio">
      <div className="about">
        {/* Sidebar toggle button */}
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          ☰
        </button>

        {/* Sidebar for small screens */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <ul>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              ☰
            </button>
            <li>
              <a href="#about" onClick={toggleSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleSidebar}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleSidebar}>
                Project
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar}>
                Contact
              </a>
            
            </li>
          </ul>
        </div>

        {/* Top menu bar for larger screens */}
        <div className="header container pt-4">
          <ul className="row">
            <li className="col">
              <a href="#about">About</a>
            </li>
            <li className="col">
              <a href="#skills">Skills</a>
            </li>
            <li className="col">
              <a href="#projects">Project</a>
            </li>
            <li className="col">
              <a href="#contact">Contact</a>
            </li>
            <li>
            </li>
          </ul>
        </div>

        {/* Main content */}
        <div id="data" className="main">
          <h1>
            <b>Sanketh Kulkarni</b>
          </h1>
          <h6>
            <b>Web Designer and Web Developer</b>
          </h6>
              <button class='btn btn-outline-info m-3 text-light' onClick={handleViewResume}>Resume</button>
          <br />
          <a href="https://www.instagram.com/sanketh_sk_/" target="_blank" rel="noreferrer">
            <img src={instadsecond} alt="NA" />
          </a>
          <a href="https://github.com/KulkarniSanketh/My-Notebook" target="_blank" rel="noreferrer">
            <img src={github} alt="NA" />
          </a>
          <a href="https://www.linkedin.com/in/shree-sanketh-kulkarni-9b118325b/" target="_blank" rel="noreferrer">
            <img src={linkdin} alt="NA" />
          </a>
          <a href="https://leetcode.com/u/shreesanket/" target="_blank" rel="noreferrer">
            <img src={leetcode} alt="NA" />
          </a>
          <a href="https://www.geeksforgeeks.org/user/shreesanket/" target="_blank" rel="noreferrer">
            <img src={gfg} alt="NA" />
          </a>
        </div>
      </div>
    </div>
  );
}
