import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        bgcolor: "#1A1A19",
        color: "white",
        height: "6vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
      }}
    >
      {/* Icons */}
      <Box
        sx={{
          my: 1,
          display: "flex",
          justifyContent: "center",
          "& svg": {
            fontSize: "35px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "goldenrod",
            transform: "translate(5px)",
            transition: "all 400ms",
          },
          "@media (max-width: 600px)": {
            "& svg": {
              fontSize: "40px",
            },
          },
        }}
      >
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <IconButton sx={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton sx={{ color: "white" }}>
            <YouTubeIcon />
          </IconButton>
        </a>
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontSize: "10px",
          "@media (max-width: 600px)": {
            fontSize: "12px",
          },
        }}
      >
        All Rights Reserved &copy; MishvaDeveloper
      </Typography>
    </Box>
  );
};

export default Footer;
