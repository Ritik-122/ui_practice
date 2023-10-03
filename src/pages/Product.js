import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../components/Cards";
import { Grid } from "@mui/material";
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const productFetch = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    };
    productFetch();
  }, []);
  console.log(data);

  return (
    <>
      <Grid container paddingLeft={20}>
        { data.map((items,index)=>(

        <Grid key={index} item md={4} lg={4} sm={12}>
          <Cards img={items.image} desc={items.description} title={items.title}  />
        </Grid>
        ))
        }
      </Grid>
    </>
  );
};

export default Product;
// {data.map((item, index) => (
//     <Cards
//      key={index}
//       img={item.image}
//       title={item.title}
//       desc={item.description}
//     />
//   ))}
