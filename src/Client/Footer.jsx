import React from 'react';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#2e2e2e] via-[#141414] to-[#2e2e2e] py-16 text-white" style={{ fontFamily: 'your-font-family' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" sx={{ color: '#5C7285', fontWeight: 'bold' }}>ServiceHUB</Typography>
          <Typography variant="body2" sx={{ color: '#F5F5F5', mt: 1, fontSize: '1rem' }}>
            Your trusted partner for professional services tailored to fit every need.
          </Typography>
        </Box>

        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ color: '#5C7285', fontWeight: 'bold', mb: 2 }}>Quick Links</Typography>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#5C7285]">Home</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">About Us</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">Our Services</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">Contact</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ color: '#5C7285', fontWeight: 'bold', mb: 2 }}>Our Services</Typography>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-[#5C7285]">Home Cleaning</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">Office Cleaning</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">Carpet Cleaning</a></li>
              <li><a href="#" className="hover:text-[#5C7285]">Deep Cleaning</a></li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ color: '#5C7285', fontWeight: 'bold', mb: 2 }}>Contact Us</Typography>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>100 S Main St, New York, NY</li>
              <li>Email: contact@servicehub.com</li>
              <li>Phone: +1 800-123-4567</li>
            </ul>
          </Grid>
        </Grid>

        <Box mt={6} display="flex" justifyContent="center" gap={4}>
          <a href="#" className="text-[#5C7285] hover:text-[#7fc3c0]">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-[#5C7285] hover:text-[#7fc3c0]">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-[#5C7285] hover:text-[#7fc3c0]">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-[#5C7285] hover:text-[#7fc3c0]">
            <FaLinkedinIn size={24} />
          </a>
          <a href="mailto:contact@servicehub.com" className="text-[#5C7285] hover:text-[#7fc3c0]">
            <FaEnvelope size={24} />
          </a>
        </Box>

        <Box mt={6} textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#5C7285',
              color: '#141414',
              '&:hover': { backgroundColor: '#7fc3c0' },
              padding: '10px 30px',
              fontWeight: 'bold',
              borderRadius: '20px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            Book a Service
          </Button>
        </Box>

        <Box mt={8} textAlign="center">
          <Typography variant="body2" component="p" sx={{ color: '#7c7c7c', mb: 1 }}>
            &copy; 2025 ServiceHUB. All rights reserved.
          </Typography>
          <Typography variant="body2" component="p">
            <a href="#" className="text-[#7c7c7c] hover:text-[#7fc3c0]">Privacy Policy</a> | <a href="#" className="text-[#7c7c7c] hover:text-[#7fc3c0]">Terms & Conditions</a>
          </Typography>
        </Box>
      </Container>

      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
        }
        a {
          text-decoration: none;
          transition: color 0.3s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
