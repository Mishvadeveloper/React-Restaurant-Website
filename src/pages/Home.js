import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import "../styles/HomeStyles.css";
import frenchFries from "../images/frenchFries.jpg";
import pizza from "../images/pizza.jpg";

const taglines = [
  "Where every flavor tells a story.",
  "Your culinary adventure awaits.",
  "A taste you’ll remember.",
  "From Farm to Fork.",
  "Savor the Extraordinary.",
  "Food that brings people together.",
  "Crafting Memories, One Dish at a Time.",
  "Elegance on Every Plate.",
  "Food that Warms the Soul.",
  "A Symphony of Flavors.",
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#eaedd8",
          animation: "backgroundAnimation 15s ease infinite",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "50px",
            fontFamily:
              "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            color: "black",
            mb: 2,
            animation: "fadeIn 3s ease-in-out",
          }}
        >
          Spice of Haven
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.5rem",
            color: "#333",
            textAlign: "center",
            maxWidth: "80%",
            mb: 2,
          }}
        >
          {taglines[currentIndex]}
        </Typography>
        <Link to="/menu">
          <Button
            variant="contained"
            sx={{
              padding: "10px 20px",
              fontSize: "1rem",
              backgroundColor: "#767676",
              color: "white",
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#546566",
                boxShadow: "2px 2px 3px 4px #546566",
              },
            }}
          >
            ORDER NOW
          </Button>
        </Link>
        <Box className="image-container" sx={{ display: "flex", gap: "5" }}>
          <img
            src={frenchFries}
            alt="Food 1"
            className="bouncing-image"
            id="img1"
          />
          <img src={pizza} alt="Food 2" className="bouncing-image" />
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
