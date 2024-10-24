"use client"
import { useState } from "react";  // Import useState to manage the open/close state
import MenuIcon from "@rsuite/icons/Menu";
import SiteIcon from '@rsuite/icons/Site';
import CalendarIcon from '@rsuite/icons/Calendar';
import { Nav, Sidenav } from "rsuite";

const MobileView = () => {
  return (
    <div className=" p-4">
      <Sidenav>
        <Sidenav.Body>
          <Nav>
            <Nav.Item icon={<SiteIcon />}>Strona główna</Nav.Item>
            <Nav.Item icon={<CalendarIcon />}>Kalendarz</Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex w-full h-[70px] bg-red-100 relative">
      {/* Hamburger Icon for mobile */}
      <div className="md:hidden flex items-center p-2">
        <MenuIcon onClick={toggleMenu} className="cursor-pointer" />
      </div>

      {/* Desktop Placeholder */}
      <div className="hidden md:flex items-center justify-center w-full">
        Desktop Navigation Content
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md z-10">
          <MobileView />
        </div>
      )}
    </div>
  );
};

export default Navbar;
