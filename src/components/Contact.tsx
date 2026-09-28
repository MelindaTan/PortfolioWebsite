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
          <div className="eyebrow">CONTACT ME</div>
          <h1><TypewriterGreeting greeting="Let’s build something together !" /></h1>
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

import React, { useState } from 'react';
import TypewriterGreeting from './TypewriterGreeting';
import '../assets/styles/Contact.scss';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill out your name, email, and message.');
      return;
    }

    setError('');

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:meltran@bu.edu?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="eyebrow">CONTACT ME</div>
          <h1><TypewriterGreeting greeting="Let’s build something together !" /></h1>
          <p>Let's collaborate and make something great!</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields">
              <input
                type="text"
                className="contact-input"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="contact-input"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <textarea
              className="contact-textarea"
              placeholder="Your message"
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>

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
