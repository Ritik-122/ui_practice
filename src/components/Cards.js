import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Cards(props) {
  return (
    <Card sx={{ maxWidth: 350,backgroundColor:"whitesmoke",boxShadow:"5px 5px #7D7C7C" ,backgroundColor: "#000",
    color: "#fff",
    opacity: ".8",
    mt:4,
    transition: "transform 0.15s ease-in-out",

  "&:hover": { transform: "scale3d(1.04, 1.04, 2)"}}}>
      <CardMedia
        sx={{ height: 200,width:"100%" }}
        image={props.img}
        title={props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {props.title}
        </Typography>
        <Typography variant="body2" color="#fff">
          {props.desc}
        </Typography>
      </CardContent>
      
    </Card>
  );
}