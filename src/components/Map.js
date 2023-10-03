import { Grid, Typography } from "@mui/material";
import React from "react";

const Map = () => {
  return (
    <>
    <Grid container>
    <Grid item md={6} lg={6} display="flex" justifyContent="center">
    <Typography variant="h4"fontFamily='Apple Color Emoji' mt={10}>
    Our Gym  located at prime location in Noida 
    </Typography>

    </Grid>
    <Grid item md={6} lg={6}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7011.840103273255!2d77.3902235!3d28.512052999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce88fff13469f%3A0xcca9bf45984d76d9!2sSector%2093B%2C%20Noida%2C%20Uttar%20Pradesh%20201304!5e0!3m2!1sen!2sin!4v1696235180755!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{border:"0"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Grid>

    </Grid>
      
    </>
  );
};

export default Map;
