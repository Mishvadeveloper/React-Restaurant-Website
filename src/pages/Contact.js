import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import "../styles/HomeStyles.css";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const contactDetails = [
    {
      href: "tel:1800000000",
      icon: <CallIcon />,
      color: "red",
      text: "1800-00-000 (toll-free)",
    },
    {
      href: "mailto:spicesofheaven786@gmail.com",
      icon: <MailIcon />,
      color: "skyblue",
      text: "spicesofheaven786@gmail.com",
    },
    {
      href: "tel:+91123456789",
      icon: <CallIcon />,
      color: "blue",
      text: "+91 123456789",
    },
  ];

  return (
    <Layout>
      <Box
        sx={{
          mt: "10vh",
          padding: "20px",
          textAlign: "center",
          animation: "backgroundAnimation 15s ease infinite",
          height: "80vh",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          CONTACT US
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "serif" }}
        >
          We are here for you!!
        </Typography>

        <Box sx={{ my: 5, mx: "auto", width: "90%", maxWidth: 600 }}>
          <Grid container spacing={4}>
            {contactDetails.map((contact, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  sx={{
                    padding: 2,
                    textAlign: "center",
                    height: "15vh",
                    boxShadow: hoveredIndex === index ? 6 : 1,
                    transition: "box-shadow 0.3s ease-in-out",
                    backgroundColor: "#b6bab7",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <IconButton
                    href={contact.href}
                    sx={{
                      color: contact.color,
                      fontSize: "2rem",
                      transition: "transform 0.3s",
                      transform:
                        hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                    }}
                  >
                    {contact.icon}
                  </IconButton>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    {contact.text}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
