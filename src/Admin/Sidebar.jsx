import React, { useState } from "react";
import { Button, Drawer, IconButton, Box, Collapse } from "@mui/material";
import {
  FaTasks,
  FaUsers,
  FaHome,
  FaBars,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { GiBroom, GiVacuumCleaner, GiWaterSplash } from "react-icons/gi"; // Cleaning-related icons

const Sidebar = ({ handleSectionChange }) => {
  const [open, setOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);

  // Toggle sidebar
  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Handle section change and close the drawer
  const handleMenuItemClick = (section) => {
    handleSectionChange(section);
    setOpen(false); // Close the drawer after section is selected
  };

  // Toggle services dropdown
  const toggleServicesMenu = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
  };

  return (
    <>
      {/* Hamburger icon and ServiceHub name for small screens */}
      <div className="lg:hidden flex gap-28 items-center p-4">
        <div className="text-3xl font-bold text-[#4CAF50] ml-4">
          {" "}
          {/* Green color for cleaning theme */}
          ServiceHub
        </div>
        <IconButton color="inherit" onClick={toggleSidebar}>
          <FaBars />
        </IconButton>
      </div>

      {/* Sidebar (Drawer) */}
      <Drawer
        open={open}
        onClose={toggleSidebar}
        anchor="left"
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            backgroundColor: "#E0F7FA", // Light blue background for freshness
            color: "black",
            padding: "1rem",
          },
        }}
      >
        {/* Logo and Name on the Left */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <div className="text-3xl font-bold text-[#4CAF50]">ServiceHub</div>
        </Box>

        <ul>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]" // Green hover effect
              onClick={() => handleMenuItemClick("dashboard")}
              startIcon={<FaHome />}
            >
              Dashboard
            </Button>
          </li>

          {/* Manage Services - Dropdown */}
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={toggleServicesMenu}
              startIcon={<FaTasks />}
              endIcon={
                isServicesMenuOpen ? <IoIosArrowDown /> : <IoIosArrowForward />
              }
            >
              Services
            </Button>
            <Collapse in={isServicesMenuOpen}>
              <ul className="pl-4">
                <li className="mb-4">
                  <Button
                    className="flex items-center text-lg hover:text-[#4CAF50]"
                    onClick={() => handleMenuItemClick("manage_services")}
                    startIcon={<GiBroom />} // Cleaning-related icon
                  >
                    Main Services{" "}
                  </Button>
                </li>
                <li className="mb-4">
                  <Button
                    className="flex items-center text-lg hover:text-[#4CAF50]"
                    onClick={() => handleMenuItemClick("manage_sub_services")}
                    startIcon={<GiVacuumCleaner />} // Vacuum-related icon
                  >
                    Sub Services
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={() => handleMenuItemClick("users")}
              startIcon={<FaUsers />}
            >
              Manage Users
            </Button>
          </li>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={() => handleMenuItemClick("Inquiry")}
              startIcon={<FaUsers />}
            >
              Manage Enquiry
            </Button>
          </li>
        </ul>
      </Drawer>

      {/* Full Sidebar for larger screens */}
      <div className="hidden lg:block w-64 bg-[#E0F7FA] text-black p-5 h-screen">
        {/* Logo and Name on the Left */}
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 4 }}>
          <div className="text-3xl font-bold text-[#4CAF50]">ServiceHub</div>
        </Box>

        <ul>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={() => handleMenuItemClick("dashboard")}
              startIcon={<FaHome />}
            >
              Dashboard
            </Button>
          </li>

          {/* Manage Services - Dropdown */}
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={toggleServicesMenu}
              startIcon={<FaAssistiveListeningSystems />}
              endIcon={
                isServicesMenuOpen ? <IoIosArrowDown /> : <IoIosArrowForward />
              }
            >
              Manage Services
            </Button>
            <Collapse in={isServicesMenuOpen}>
              <ul className="pl-4">
                <li className="mb-4">
                  <Button
                    className="flex items-center text-lg hover:text-[#4CAF50]"
                    onClick={() => handleMenuItemClick("manage_services")}
                    startIcon={<GiBroom />}
                  >
                    Main Services
                  </Button>
                </li>
                <li className="mb-4">
                  <Button
                    className="flex items-center text-lg hover:text-[#4CAF50]"
                    onClick={() => handleMenuItemClick("manage_sub_services")}
                    startIcon={<GiVacuumCleaner />}
                  >
                    Sub Services
                  </Button>
                </li>
              </ul>
            </Collapse>
          </li>

          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={() => handleMenuItemClick("users")}
              startIcon={<FaUsers />}
            >
              Manage Users
            </Button>
          </li>
          <li className="mb-4">
            <Button
              className="flex items-center text-lg hover:text-[#4CAF50]"
              onClick={() => handleMenuItemClick("Inquiry")}
              startIcon={<FaUsers />}
            >
              Manage Enquiry
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
