import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/About.css";
import Subscriberlist from '../components/Subscriberlist'
const About = () => {
  return (
    <>
     
        <img
          src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5004.jpg?w=996&t=st=1695989467~exp=1695990067~hmac=852d39ba308f5a528e9d29793fc60bbbbd63f8308c0273e5ba815e770a1150fe"
          alt="bg image"
        />
         <Box className="background">
        <Typography variant="h3">About Us</Typography>

        <Typography variant="caption" sx={{maxWidth:"200px" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </Typography>
        <Subscriberlist/>
      </Box>
    </>
  );
};

export default About;
