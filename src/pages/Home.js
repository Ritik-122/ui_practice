import { Box, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReactTyped from "react-typed";
import Cards from "../components/Cards";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Form from "../components/Form";
import HomeImageList from "../components/ImageList";

import "../styles/home.css";
const Home = () => {
  const [counter, setCounter] = useState(0);
  const [val,setVal]=useState(null)

  const getCount = async () => {
    const res = await axios.get("http://localhost:5000/getCount");
    setVal(res.data);
  };
  useEffect(() => {
    getCount();
  }, []);

  useEffect(() => {
    const clearId = setInterval(function () {
      if (counter === val) {
        clearInterval(clearId);
        return;
      } else {
        setCounter(counter + 1);
      }
    }, 1000);

    return () => {
      clearInterval(clearId);
    };
  }, [counter]);

  return (
    <>
      <Box sx={{ marginTop: "30px" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              justifyContent: "center",
              display: "flex",
              color: "white",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {/* <img className="giphy" src={Giphy}  alt='gym'/> */}
            <div className="animation">
              <h1>Welcome to King's Gym</h1>
              <p>
                <i>
                  <ReactTyped
                    backSpeed={20}
                    cursorChar=">"
                    showCursor={true}
                    strings={["Eat Sleep Workout. Repeat!"]}
                    typeSpeed={100}
                    loop
                  />
                </i>
              </p>
              <h1>5 Days Free Trial</h1>
              <Form />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ justifyContent: "center", display: "flex" }}
          >
            <HomeImageList />
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          mt: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="subhead"
          variant="h3"
          sx={{ textDecoration: "underline" }}
        >
          Our Products
        </Typography>
      </Box>
      {/* Card */}
      <Grid container mt={4} mb={10} paddingLeft={15}>
        <Grid item md={4} sm={12} lg={4}>
          <Cards
            img={"https://m.media-amazon.com/images/I/616cI2pfTOL.jpg"}
            title={"Whey Protien"}
            desc={
              "Whey protein is a supplement that people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass."
            }
          />
        </Grid>
        <Grid item md={4} sm={12} lg={4}>
          <Cards
            img={
              "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/data/Optimum-Nutrition/19-May-2023/1145331_1.jpg"
            }
            title={"Creatine Monohydrate"}
            desc={
              "Whey protein is a supplement that people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass."
            }
          />
        </Grid>
        <Grid item md={4} sm={12} lg={4}>
          <Cards
            img={
              "https://img4.hkrtcdn.com/11973/prd_1197243-MuscleBlaze-BCAA-Pro-1.1-lb-33-Servings-Watermelon_o.jpg"
            }
            title={"BCAA's"}
            desc={
              "Whey protein is a supplement that people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass."
            }
          />
        </Grid>
      </Grid>
      {/* Count of Subscribers */}
      <Box
        sx={{
          mt: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="column">
          <Typography
            className="subhead"
            variant="h3"
            sx={{ textDecoration: "underline" }}
          >
            Subscribers
          </Typography>
          <Typography mt={5} variant="h4" ml={7} mb={5}>
            Live Count: {counter}
          </Typography>
        </Stack>
      </Box>

      {/* FAQ */}
      <Grid
        container
        mb={10}
        sx={{ paddingLeft: "122px", paddingRight: "105px" }}
      >
        <Grid item md={6} sm={12}>
          <Typography variant="h3" color="whitesmoke">
            Frequently Asked Questions
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Faq />
        </Grid>
      </Grid>
      <hr style={{ color: "white" }} />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
