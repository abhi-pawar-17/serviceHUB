import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import b1 from '../assets/b1.webp';
import b2 from '../assets/b2.webp';
import b3 from '../assets/b3.webp';
import b4 from '../assets/b4.webp';

// Reusable Feature Component with Smaller Card Sizes
const Feature = ({ icon, title, description, customBgColor }) => (
  <Grid item xs={12} sm={6} md={3} textAlign="center">
    <Box
      sx={{
        mb: 3, // Reduced bottom margin
        padding: '20px', // Reduced padding for smaller size
        backgroundColor: customBgColor || '#fff',
        borderRadius: '12px',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Lighter shadow
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Stronger hover shadow
          backgroundColor: '#F5F5F5',
        },
      }}
    >
      {/* Icon with Smaller Size */}
      <Box
        sx={{
          mb: 2, // Reduced margin-bottom
          width: '50px', // Smaller icon size
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
          backgroundColor: '#FF6F61',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Lighter shadow
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          '&:hover': {
            backgroundColor: '#27AE60',
            transform: 'scale(1.1)',
          },
        }}
      >
        <img
          src={icon}
          alt={title}
          style={{
            width: '28px', // Smaller icon size
            height: '28px',
            objectFit: 'contain',
            transition: 'transform 0.3s ease',
          }}
        />
      </Box>

      {/* Title with Smaller Font Size */}
      <Typography
        variant="h6" // Smaller font size
        sx={{
          color: '#2D9CDB',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 'bold',
          mb: 1, // Reduced margin-bottom
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#FF6F61',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {title}
      </Typography>

      {/* Description with Smaller Font Size */}
      <Typography
        variant="body2" // Smaller font size for description
        sx={{
          color: '#333333',
          lineHeight: 1.4, // Adjusted line height
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'center',
          mb: 1, // Reduced margin-bottom
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#2D9CDB',
          },
        }}
      >
        {description}
      </Typography>
    </Box>
  </Grid>
);

// Reusable Statistic Component with Smaller Typography
const Statistic = ({ value, label }) => (
  <Grid item xs={12} sm={6} md={3} textAlign="center">
    <Typography
      variant="h5" // Smaller font size for value
      sx={{
        color: '#FF6F61',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 'bold',
        mb: 0.5, // Reduced margin-bottom
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          color: '#2D9CDB',
          transform: 'scale(1.1)',
        },
      }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2" // Smaller font size for label
      sx={{
        color: '#666666',
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '500',
        transition: 'color 0.3s ease',
        '&:hover': {
          color: '#2D9CDB',
        },
      }}
    >
      {label}
    </Typography>
  </Grid>
);

const Benefits = () => {
  const features = [
    {
      icon: b1,
      title: 'Professional Team',
      description: 'Our trained, insured cleaners ensure professional, trusted service and impeccable results.',
    },
    {
      icon: b2,
      title: 'On Time Service',
      description: 'Reliable, punctual service that respects your schedule and exceeds expectations.',
    },
    {
      icon: b3,
      title: 'Transparent Pricing',
      description: 'Affordable, upfront rates with no hidden costs — quality cleaning at the right price.',
    },
    {
      icon: b4,
      title: 'Eco Friendly',
      description: 'We use non-toxic, eco-friendly products for a safe, healthy, and sparkling environment.',
    },
  ];

  const statistics = [
    { value: '65,250+', label: 'Houses Cleaned' },
    { value: '23,160+', label: 'Happy Customers' },
    { value: '150+', label: 'Experienced Cleaners' },
    { value: '20+', label: 'Years of Experience' },
  ];

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#F1F1F1', color: '#333333' }}>
      <Container maxWidth="lg">
        {/* Heading Section */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: '#2D9CDB',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 'bold',
            mb: 5,
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          Why Choose Us?
        </Typography>

        {/* Features Section */}
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </Grid>

        {/* Statistics Section */}
        <Grid container spacing={3} mt={6} justifyContent="center">
          {statistics.map((stat, index) => (
            <Statistic key={index} {...stat} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
