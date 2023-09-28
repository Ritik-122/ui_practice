import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function HomeImageList() {
  return (
    <ImageList sx={{ width: 550, height: 500,'&::-webkit-scrollbar': {display: "none"} }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img.freepik.com/free-photo/cast-iron-dumbbell-weights_1048-11523.jpg?w=996&t=st=1695817959~exp=1695818559~hmac=69c0693d3516222cc8ffa43832abbc7b24c82f972ff93033a863eef5b7391bbf',
    title: 'All equipments',
 
    rows: 2,
    cols: 2,
  
  },
  {
    img: 'https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?w=826&t=st=1695818003~exp=1695818603~hmac=5c3f975a6c4c77241c6692cafecbef7e3165293140f76950fc743161cdc6eeab',
    title: 'Cardio area',
   
  },
  {
    img: 'https://img.freepik.com/free-photo/low-angle-view-unrecognizable-muscular-build-man-preparing-lifting-barbell-health-club_637285-2497.jpg?w=996&t=st=1695891929~exp=1695892529~hmac=8beeec8e658419bbaa74ed4b26fa3a6531be28f14e573105fae30886492c3598',
    title: 'Heavylifting area',
  
  },
  {
    img: 'https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?w=826&t=st=1695891849~exp=1695892449~hmac=baff759bd2f320a137fc2febdda76e078f0ff9266c0f8da20e6d3fb279ca029b',
    title: 'Unisex',
    
    cols: 2,
  },
  
];
