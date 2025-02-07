import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import Sidebar from "../Admin/Sidebar";
import Dashboard from "../Admin/Dashboard";
import ManageServices from "../Admin/ManageServices";
import ManageSubService from "./ManageSubService";
import ManageUsers from "../Admin/ManageUsers";
import InquiryPage from "./InquiryPage";
import axios from "axios";

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [services, setServices] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Fetch services and set up polling
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "http://107.21.85.231:8292/api/services/services"
        );
        if (response.status === 200) {
          setServices(response.data);
        } else {
          console.error("Failed to fetch services");
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
    const intervalId = setInterval(fetchServices, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleSectionChange = (section) => setActiveSection(section);

  const handleSnackbarOpen = (message, isError = false) => {
    setSnackbarMessage(message);
    isError ? setErrorSnackbar(true) : setOpenSnackbar(true);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar handleSectionChange={handleSectionChange} />
      <div className="flex-1 p-6 bg-gray-50">
        {activeSection === "dashboard" && <Dashboard />}
        {activeSection === "services" && (
          <ManageServices
            services={services}
            setServices={setServices}
            handleSnackbarOpen={handleSnackbarOpen}
          />
        )}
        {activeSection === "manage_services" && (
          <ManageServices
            services={services}
            setServices={setServices}
            handleSnackbarOpen={handleSnackbarOpen}
          />
        )}
        {activeSection === "manage_sub_services" && <ManageSubService />}
        {activeSection === "users" && <ManageUsers />}
        {activeSection === "Inquiry" && <InquiryPage />}
      </div>
      <Snackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
      <Snackbar
        open={errorSnackbar}
        onClose={() => setErrorSnackbar(false)}
        message={snackbarMessage}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </div>
  );
};

export default AdminPanel;
