import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { Box, Grid, Stack, Typography } from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ height: "300px", paddingLeft: "107px", paddingRight: "100px" }}
      >
        <Grid container direction="row" spacing={4}>
          <Grid item lg={4} md={4} sm={12}>
            <FitnessCenterIcon mr={1} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,

                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "whitesmoke",
                textDecoration: "none",
              }}
            >
              King's Gym
            </Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Typography>Connect with us </Typography>
            <AndroidIcon fontSize="large" />
            <AppleIcon fontSize="large" />
          </Grid>
          <Grid item lg={4} md={4} sm={12}>
            <Typography variant="h5">Copyright 2023</Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12} marginTop={2}>
            <Stack direction="column" spacing={2}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                Contact Us
              </Link>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={12} marginTop={2}>
            <Stack direction="column" spacing={2}>
              <Typography variant="p">Offers</Typography>
              <Typography variant="p">Pricing</Typography>
              <Typography variant="p">Product Details</Typography>
            </Stack>
          </Grid>
          <Grid item lg={4} md={4} sm={12} marginTop={2}>
            <Stack direction="column" spacing={2}>
              <Typography variant="p">Legal</Typography>
              <Typography variant="p">Privacy Policy</Typography>
              <Typography variant="p">Terms and Condition</Typography>
              <Typography variant="p">User License Agreement</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
