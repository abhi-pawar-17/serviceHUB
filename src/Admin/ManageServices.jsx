import React, { useState } from "react";
import {
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Typography,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FaPlus, FaTrash, FaEdit, FaSearch } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageServices = ({ services, setServices }) => {
  const [newService, setNewService] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [editServiceId, setEditServiceId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState(services || []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleAddOrUpdateService = async () => {
    try {
      if (!newService.trim()) {
        toast.error("Service name is required.");
        return;
      }

      const payload = {
        name: newService,
        description: newServiceDescription,
        isActive: isActive ? "1" : "0",
      };

      const url = editServiceId
        ? `http://107.21.85.231:8292/api/services/services/${editServiceId}`
        : "http://107.21.85.231:8292/api/services/services";
      const method = editServiceId ? "put" : "post";
      await axios[method](url, payload);

      const updatedServices = await axios.get(
        "http://107.21.85.231:8292/api/services/services"
      );
      setServices(updatedServices.data || []);
      setFilteredServices(updatedServices.data || []);
      setNewService("");
      setNewServiceDescription("");
      setIsActive(true);
      setEditServiceId(null);
      toast.success(
        editServiceId
          ? "Service updated successfully!"
          : "Service added successfully!"
      );
    } catch (error) {
      console.error("Error adding/updating service:", error);
      toast.error("Error processing the request");
    }
  };

  const handleDeleteService = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "Do you really want to delete this service?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(
          `http://107.21.85.231:8292/api/services/services/${id}`
        );
        const updatedServices = await axios.get(
          "http://107.21.85.231:8292/api/services/services"
        );
        setServices(updatedServices.data || []);
        setFilteredServices(updatedServices.data || []);
        toast.success("Service deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting service:", error);
      toast.error("Error processing the delete request");
    }
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `http://107.21.85.231:8292/api/services/services/search/${searchTerm}`
      );
      setFilteredServices(response.data || []);
    } catch (error) {
      console.error("Error searching services:", error);
      toast.error("Error fetching search results");
      setFilteredServices([]);
    }
  };

  return (
    <Box
      sx={{
        padding: isMobile ? 2 : 4,
        backgroundColor: "#F1F8F6",
        borderRadius: 2,
        boxShadow: 3,
        maxHeight: "93vh",
        overflowY: "auto",
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Typography
        variant={isMobile ? "h5" : "h4"}
        component="h2"
        sx={{ fontWeight: "bold", marginBottom: 4, color: "#4CAF50" }}
      >
        Manage Services - Cleaning Theme
      </Typography>

      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12} sm={8}>
          <TextField
            label="Service Name"
            variant="outlined"
            fullWidth
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}
            InputProps={{
              sx: {
                padding: "10px 14px",
                fontSize: isMobile ? "14px" : "16px",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            }
            label="Is Active?"
            sx={{ marginTop: 1 }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginBottom: 4 }}>
        <Grid item xs={12}>
          <TextField
            label="Service Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newServiceDescription}
            onChange={(e) => setNewServiceDescription(e.target.value)}
            sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}
            InputProps={{
              sx: {
                padding: "10px 14px",
                fontSize: isMobile ? "14px" : "16px",
              },
            }}
          />
        </Grid>
      </Grid>

      <Button
        onClick={handleAddOrUpdateService}
        variant="contained"
        color="primary"
        fullWidth
        sx={{
          marginBottom: 2,
          backgroundColor: "#FF9900",
          "&:hover": { backgroundColor: "#FF6600" },
          borderRadius: 2,
          padding: "12px",
          fontSize: isMobile ? "14px" : "16px",
        }}
        startIcon={<FaPlus />}
      >
        {editServiceId ? "Update Service" : "Add Service"}
      </Button>

      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={10}>
          <TextField
            label="Search Services"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ backgroundColor: "#ffffff", borderRadius: 2 }}
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton
            color="primary"
            onClick={handleSearchClick}
            sx={{ padding: "10px" }}
          >
            <FaSearch />
          </IconButton>
        </Grid>
      </Grid>

      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 400,
          overflowY: "auto",
          borderRadius: 2,
          position: "relative",
        }}
      >
        <Table stickyHeader sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                #
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                ID
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Status
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Updated At
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(filteredServices) &&
              filteredServices.map((service, index) => (
                <TableRow key={service.id}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{service.id}</TableCell>
                  <TableCell align="center">{service.name}</TableCell>
                  <TableCell align="center">{service.description}</TableCell>
                  <TableCell align="center">
                    {service.isActive === "1" ? "Active" : "Inactive"}
                  </TableCell>
                  <TableCell align="center">
                    {service.updatedAt || "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => {
                        setNewService(service.name);
                        setNewServiceDescription(service.description);
                        setIsActive(service.isActive === "1");
                        setEditServiceId(service.id);
                      }}
                      variant="outlined"
                      color="primary"
                      size="small"
                      sx={{ marginRight: 1, borderRadius: 2 }}
                      startIcon={<FaEdit />}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteService(service.id)}
                      variant="outlined"
                      color="error"
                      size="small"
                      sx={{ borderRadius: 2 }}
                      startIcon={<FaTrash />}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ManageServices;
