import React, { useEffect, useState } from "react";

import "./styles.css";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Ajusta el punto de quiebre según tus necesidades
  };

  useEffect(() => {
    handleResize(); // Llama a la función al cargar la página

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const DesktopNavbar = () => {
    return (
      <div className="navbar">
        <div className="desktop-navbar">
          <div className="navbar-left">
            <span className="name">Joaquin Monge</span>
          </div>
          <div className="navbar-right">
            <button className="nav-button">Project</button>
            <button className="nav-button">Techonologies</button>
            <button className="nav-button">Contact</button>
          </div>
        </div>
      </div>
    );
  };

  const MobileNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };
    return (
      <div className="mobile-navbar">
        <span className="name">Joaquin Monge</span>
        <button className="menu-button" onClick={toggleSidebar}>
          Menu
        </button>

        {isSidebarOpen && (
          <div className="sidebar">
            <div className="sidebar-content">
              <h1>AboutMe</h1>
              <h1>Technologies</h1>
              <h1>Projects</h1>
              <h1>Contact</h1>
            </div>
            <div className="sidebar-overlay" onClick={closeSidebar}></div>
          </div>
        )}
      </div>
    );
  };

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
