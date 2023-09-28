import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {

    imgPath:
      'https://img.freepik.com/free-photo/cast-iron-dumbbell-weights_1048-11523.jpg?w=996&t=st=1695817959~exp=1695818559~hmac=69c0693d3516222cc8ffa43832abbc7b24c82f972ff93033a863eef5b7391bbf',
  },
  {

    imgPath:
      'https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?w=826&t=st=1695818003~exp=1695818603~hmac=5c3f975a6c4c77241c6692cafecbef7e3165293140f76950fc743161cdc6eeab',
  },
  {

    imgPath:
      'https://img.freepik.com/premium-photo/image-gym-fitness-bodybuilding-concept-mixed-media_392761-3969.jpg?w=826',
  },
  {

    imgPath:
      'https://img.freepik.com/free-photo/it-smoothly-gorgeous-blonde-woman-gym-her-weekend-time_146671-16986.jpg?t=st=1695818021~exp=1695818621~hmac=bc22fbe0ceb04d011da368aa5d7e36c644ce244b254f04e3dbdfb7c2c29abbc7',
  },
];

function Carousell() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 , margin:5}}>

      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 300,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

    </Box>
  );
}

export default Carousell;
