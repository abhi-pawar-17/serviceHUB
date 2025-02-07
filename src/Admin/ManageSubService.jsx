import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const ManageSubServices = () => {
  const [name, setName] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [services, setServices] = useState([]);
  const [subServices, setSubServices] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    axios
      .get("http://107.21.85.231:8292/api/services/services")
      .then((response) => setServices(response.data))
      .catch(() => toast.error("Failed to load services"));

    fetchSubServices();
  }, []);

  const fetchSubServices = () => {
    axios
      .get("http://107.21.85.231:8292/api/services/subservices")
      .then((response) => setSubServices(response.data))
      .catch(() => toast.error("Failed to load sub-services"));
  };

  const handleAddOrUpdate = async () => {
    if (!name.trim() || !serviceId) {
      toast.error("Name and Service are required.");
      return;
    }

    const payload = {
      name,
      services: { id: parseInt(serviceId) },
      isActive: isActive ? "1" : "0",
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    try {
      if (editingId) {
        await axios.put(
          `http://107.21.85.231:8292/api/services/subservices/${editingId}`,
          payload
        );
        toast.success("Sub-service updated successfully!");
      } else {
        await axios.post(
          "http://107.21.85.231:8292/api/services/subservices",
          payload
        );
        toast.success("Sub-service added successfully!");
      }
      resetForm();
      fetchSubServices();
    } catch (error) {
      toast.error("Error saving sub-service");
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will delete the sub-service!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://107.21.85.231:8292/api/services/subservices/${id}`
          );
          Swal.fire("Deleted!", "Sub-service has been deleted.", "success");
          fetchSubServices();
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an error deleting the sub-service.",
            "error"
          );
        }
      }
    });
  };

  const handleEdit = (subService) => {
    setName(subService.name);
    setServiceId(subService.services.id.toString());
    setIsActive(subService.isActive === "1");
    setEditingId(subService.id);
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchSubServices();
      return;
    }
    try {
      const response = await axios.get(
        `http://107.21.85.231:8292/api/services/subservices/search/${searchTerm}`
      );
      setSubServices(response.data);
    } catch (error) {
      toast.error("Error searching sub-services");
    }
  };

  const resetForm = () => {
    setName("");
    setServiceId("");
    setIsActive(true);
    setEditingId(null);
  };

  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "#fff",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: "800px",
        margin: "0 auto",
        height: "90vh", // Set the height to 90vh
        overflowY: "auto", // This will enable vertical scrolling inside the box
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />

      <Typography
        variant="h4"
        component="h2"
        sx={{ fontWeight: "bold", marginBottom: 4, textAlign: "center" }}
      >
        Manage Sub-Services
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Sub-Service Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Service</InputLabel>
            <Select
              value={serviceId}
              onChange={(e) => setServiceId(e.target.value)}
            >
              {services.map((service) => (
                <MenuItem key={service.id} value={service.id}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              />
            }
            label="Is Active?"
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddOrUpdate}
          >
            {editingId ? "Update Sub-Service" : "Add Sub-Service"}
          </Button>
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Search Sub-Services"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6">Sub-Service List:</Typography>
          {subServices.length > 0 ? (
            <TableContainer
              component={Paper}
              sx={{ maxHeight: "70vh", overflow: "auto" }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="sub-services table">
                <TableHead>
                  <TableRow>
                    <TableCell>Index</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Updated At</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subServices.map((subService, index) => (
                    <TableRow key={subService.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{subService.id}</TableCell>
                      <TableCell>{subService.name}</TableCell>
                      <TableCell>{subService.services.name}</TableCell>
                      <TableCell>
                        {subService.isActive === "1" ? "Active" : "Inactive"}
                      </TableCell>
                      <TableCell>{subService.updatedAt}</TableCell>
                      <TableCell>
                        <IconButton
                          color="primary"
                          onClick={() => handleEdit(subService)}
                        >
                          <EditIcon />
                        </IconButton>
                        <Button
                          variant="outlined"
                          color="error"
                          sx={{ marginLeft: 2 }}
                          onClick={() => handleDelete(subService.id)}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>No Sub-Services Found</Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ManageSubServices;
