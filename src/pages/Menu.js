import React from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { MenuList } from "../data/data.js";
import "../styles/HomeStyles.css";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          marginBottom: "70px",
          marginTop: "70px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          bgcolor: "#eaedd8",
          animation: "backgroundAnimation 15s ease infinite",
        }}
      >
        {MenuList.map((menu, index) => (
          <Card
            key={menu.id || index}
            sx={{
              width: 300,
              margin: 2,
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: 6,
                transform: "scale(1.05)",
              },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                src={menu.image}
                alt={menu.name}
                sx={{
                  height: 200,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2">
                  <b>Items: </b>
                  {menu.description}
                </Typography>
                <Typography variant="body2">
                  <b>Price:</b> {menu.price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
