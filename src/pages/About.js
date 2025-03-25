import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "#f8f8f8",
          py: 10,
          textAlign: "center",
          animation: "backgroundAnimation 15s ease infinite",
          height: "70vh",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", marginTop: "50px" }}>
          Our Story: Crafting Memories, One Bite at a Time
        </Typography>
        <Box
          sx={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "justify",
            color: "#555",
            fontSize: "1.2rem",
            lineHeight: "1.6",
            px: 2,
          }}
        >
          <Typography paragraph sx={{ pt: "10px" }}>
            Welcome to My Restaurant, where culinary artistry meets heartfelt
            hospitality. Our journey began with a passion for creating memorable
            dining experiences that bring people together. Nestled in the heart
            of Ahmedabad, we take pride in offering a diverse menu that
            celebrates both traditional and contemporary flavors.
          </Typography>
          <Typography paragraph>
            At My Restaurant, we believe that food is more than sustenance; it's
            a medium for storytelling and connection. Our chefs meticulously
            craft each dish using locally sourced, high-quality ingredients to
            ensure every bite is a testament to our commitment to excellence.
          </Typography>
          <Typography paragraph>
            Beyond our culinary offerings, we are deeply committed to our
            community. We actively participate in local events, support
            sustainability initiatives, and strive to create a welcoming space
            for all. Our mission is to not only satisfy your palate but also to
            provide a warm and inviting atmosphere that feels like home.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            padding: "10px 20px",
            marginTop: "10px",
            fontSize: "1rem",
            backgroundColor: "#767676",
            color: "white",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#546566",
              boxShadow: "2px 2px 3px 4px #546566",
            },
          }}
          component={Link}
          to="/contact"
        >
          Contact Us
        </Button>
      </Box>
    </Layout>
  );
};

export default About;
