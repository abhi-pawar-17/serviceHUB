import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { Box, Button, Container, Typography, Grid } from '@mui/material';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const requestData = {
      name: data.name,
      email: data.email,
      description: data.message,
    };

    try {
      const response = await fetch('http://107.21.85.231:8292/api/inquiry/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestData),
      });

      response.ok
        ? Swal.fire('Success!', 'Your inquiry has been submitted!', 'success')
        : Swal.fire('Error!', 'Submission failed. Please try again.', 'error');
    } catch (error) {
      Swal.fire('Error!', 'An unexpected error occurred.', 'error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#ffffff]">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom sx={{ color: '#141414', fontWeight: 'bold' }}>
          Get In Touch
        </Typography>
        <Typography variant="body2" align="center" sx={{ color: '#555', mb: 4 }}>
          We'd love to hear from you. Fill out the form below.
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box position="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="custom-input"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="error-text">{errors.name.message}</span>}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box position="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="custom-input"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && <span className="error-text">{errors.email.message}</span>}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box position="relative">
                <textarea
                  placeholder="Your Message"
                  className="custom-textarea"
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message.message}</span>}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#5C7285',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#818C78' },
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      {/* Styling Enhancements */}
      <style jsx>{`
        .custom-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }

        .custom-input:focus {
          border-color: #5C7285;
        }

        .custom-input::placeholder {
          color: #aaa;
        }

        .custom-textarea {
          width: 100%;
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          outline: none;
          resize: none;
          transition: border-color 0.3s;
        }

        .custom-textarea:focus {
          border-color: #5C7285;
        }

        .error-text {
          color: red;
          font-size: 12px;
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
};

export default Contact;
