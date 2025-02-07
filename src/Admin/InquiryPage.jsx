import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  Typography,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const InquiryPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editInquiry, setEditInquiry] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fetchInquiries = async () => {
    try {
      const response = await axios.get(
        "http://107.21.85.231:8292/api/inquiry/inquiry"
      );
      setInquiries(response.data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEditClick = (inquiry) => {
    setEditInquiry(inquiry);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setEditInquiry(null);
  };

  const handleUpdate = async () => {
    if (!editInquiry) return;
    try {
      await axios.put(
        `http://107.21.85.231:8292/api/inquiry/inquiry/${editInquiry.id}`,
        editInquiry
      );
      setInquiries(
        inquiries.map((inq) => (inq.id === editInquiry.id ? editInquiry : inq))
      );
      handleDialogClose();
    } catch (error) {
      console.error("Error updating inquiry:", error);
    }
  };

  const handleFieldChange = (e) => {
    setEditInquiry({ ...editInquiry, [e.target.name]: e.target.value });
  };

  const handleResolvedChange = (e) => {
    setEditInquiry({ ...editInquiry, isResolved: e.target.value });
  };

  const filteredInquiries = inquiries.filter((inquiry) =>
    inquiry.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <Typography variant="h4" gutterBottom>
        Inquiry Management
      </Typography>

      <div className="flex justify-between mb-4">
        <TextField
          label="Search by Name"
          value={searchTerm}
          onChange={handleSearch}
          variant="outlined"
          size="small"
        />
      </div>

      <TableContainer
        component={Paper}
        style={{ height: "84vh", overflowY: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Is Resolved</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell>{inquiry.id}</TableCell>
                <TableCell>{inquiry.name}</TableCell>
                <TableCell>{inquiry.email}</TableCell>
                <TableCell>{inquiry.description}</TableCell>
                <TableCell>{inquiry.isResolved}</TableCell>
                <TableCell>{inquiry.createdAt}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditClick(inquiry)}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Edit Inquiry</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="name"
            value={editInquiry?.name || ""}
            onChange={handleFieldChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            value={editInquiry?.email || ""}
            onChange={handleFieldChange}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            name="description"
            value={editInquiry?.description || ""}
            onChange={handleFieldChange}
            fullWidth
          />
          <FormControl component="fieldset" margin="dense">
            <Typography variant="subtitle1">Is Resolved</Typography>
            <RadioGroup
              row
              name="isResolved"
              value={editInquiry?.isResolved || "0"}
              onChange={handleResolvedChange}
            >
              <FormControlLabel value="1" control={<Radio />} label="Yes" />
              <FormControlLabel value="0" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InquiryPage;
