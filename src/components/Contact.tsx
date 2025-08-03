/*
import React, { useState, useEffect } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  useEffect(() => {
    // TODO: Replace with your EmailJS public key
    // 1. Sign up at https://www.emailjs.com
    // 2. Create a new Email Service (e.g., Gmail)
    // 3. Create an email template
    // 4. Get your public key from Account > API Keys
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const inputStyles = {
    backgroundColor: 'white',
    '& .MuiInputBase-input': {
      color: 'black',
      backgroundColor: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      }
    },
    '& .MuiFormHelperText-root': {
      color: 'black',
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    setErrors(prev => ({ ...prev, [name]: false }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };
    setErrors(newErrors);

    if (name !== '' && email !== '' && message !== '') {
      const templateParams = {
        name: name,
        email: email,
        message: message
      };

      console.log('Sending email with params:', templateParams);
      emailjs.send(
        'YOUR_SERVICE_ID', // TODO: Replace with your EmailJS service ID from Email Services
        'YOUR_TEMPLATE_ID', // TODO: Replace with your EmailJS template ID from Email Templates
        templateParams
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again.');
        },
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Let's collaborate and make something great !</p>
          <Box
            component="form"
            onSubmit={sendEmail}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Please enter your name" : ""}
                sx={inputStyles}
              />
              <TextField
                required
                name="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email ? "Please enter your email or phone number" : ""}
                sx={inputStyles}
              />
            </div>
            <TextField
              required
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? "Please enter the message" : ""}
              sx={inputStyles}
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
          <div className="contact-info">
            <div className="info-item">
              <EmailIcon />
              <a href="mailto:meltran@bu.edu">meltran@bu.edu</a>
            </div>
            <div className="info-item">
              <LocationOnIcon />
              <p>Boston, Massachusetts & Portland, Oregon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
*/

// Contact component temporarily commented out
const Contact: React.FC = () => {
  return null;
};

export default Contact;
