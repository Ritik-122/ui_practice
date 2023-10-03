import { Avatar, Grid, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Subscriberlist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchSubscriberDetails = async () => {
      const res = await axios.get("http://127.0.0.1:5000/getSubscriber");

      setData(res.data);
    };
    fetchSubscriberDetails();
  }, []);

  return (
    <>
      <Typography variant="h5" mt={10} paddingLeft={3}>
        Our Happy Subscribers
      </Typography>
      <Grid container color="white" mt={5} mb={5} paddingLeft={3}>
        {data.map((i, index) => (
          <>
            
            <Grid item lg={6} md={6}>
            <Avatar>{i.name.charAt(0)}</Avatar> 
            <Typography variant="body" sx={{ fontColor: "white", display:"inline-block" }}>
            {i.name}
              </Typography>
              
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default Subscriberlist;
