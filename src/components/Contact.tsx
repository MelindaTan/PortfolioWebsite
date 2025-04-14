import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import { Box, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

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

    const hasError = Object.values(newErrors).some(error => error);
    if (hasError) return;

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send('your_service_id', 'your_template_id', templateParams, 'your_public_key')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
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
            />
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
