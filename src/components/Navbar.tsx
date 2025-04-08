import { Link } from "react-router-dom";
import { schoolConfig } from "../config/schoolConfig";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import { useState } from "react";
import schoolLogo from "../assets/school-logo.jpg";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const NavbarItems = [
    { name: "About Us", path: "#about-section" },
    { name: "Facilities", path: "#facilities-section" },
    { name: "Curriculum", path: "#curriculum-section" },
    { name: "Gallery", path: "#gallery-section" },
  ];

  const NavBarSmallScreen = () => {
    return (
      <>
        <div className="fixed w-full font-poppins top-[60px] md:top-[70px] bg-white z-20 p-1">
          <div className="flex flex-col items-center justify-center h-full">
            {NavbarItems.map((item) => (
              <Link
                key={item.name}
                to="#"
                className="text-lg mb-4 font-medium"
                onClick={() => {
                  window.location.href = `${item.path}`;
                  handleNavClose();
                }}
              >
                {item.name}
              </Link>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
              onClick={() => {
                window.location.href = "#about-section";
                setNavOpen(false);
              }}
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      </>
    );
  };

  const handleNavOpen = () => {
    setNavOpen(true);
  };
  const handleNavClose = () => {
    setNavOpen(false);
  };

  return (
    <>
      <nav
        id="navbar-block"
        className="bg-white fixed w-full h-[60px] md:h-[70px] z-10 top-0 shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex md:grid md:grid-cols-2 gap-4 items-center justify-between h-16">
          <div className="flex items-center font-poppins font-bold text-2xl">
            <img
              src={schoolLogo}
              alt="logo"
              className="w-10 h-10 rounded-full mr-2"
            />
            {schoolConfig.schoolName}
          </div>

          {/* NavLinks */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-5">
              {NavbarItems.map((item) => (
                <Link
                  key={item.name}
                  to="#"
                  className="text-base font-medium font-poppins hover:text-secondary px-3 py-2"
                  onClick={() => {
                    window.location.href = `${item.path}`;
                    handleNavClose();
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 px-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
                  onClick={() => (window.location.href = "#about-section")}
                >
                  ENQUIRE NOW
                </button>
              </div>
            </div>
          </div>

          {/* Menu Button */}
          <div className="flex flex-row-reverse items-center visible md:hidden m-1">
            <div className="p-0">
              {!navOpen ? (
                <Button
                  color="error"
                  variant="contained"
                  size="small"
                  className="p-0"
                  onClick={handleNavOpen}
                >
                  <MenuIcon />
                </Button>
              ) : (
                <Button
                  color="error"
                  variant="contained"
                  size="small"
                  className="p-0"
                  onClick={handleNavClose}
                >
                  <CloseIcon />
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {navOpen && <NavBarSmallScreen />}
    </>
  );
};

export default Navbar;
