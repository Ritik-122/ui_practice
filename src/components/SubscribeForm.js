import  React, { useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { Alert } from '@mui/material';





const defaultTheme = createTheme();

export default function SubscribeForm() {
  const myfun=()=>{
    setTimeout(() => {
      setisAdded(false);
      setisAlready(false);
    },3000 );
  }
  
  const [isAdded,setisAdded]=useState(false);
  const [isAlready,setisAlready]=useState(false);
    const fname=useRef();
    const lname=useRef();
    const email=useRef();
    const checkbox=useRef();
  const handleSubmit =async (event) => {
    event.preventDefault();
    const name=fname.current.value+" "+lname.current.value
    const subscriberData={
      email: email.current.value,
      checkbox:checkbox.current.value,
      name:name
    }
    const res=await axios.post('http://127.0.0.1:5000/subscribers',subscriberData)
    console.log(res.data);
    if(res.data==='User added'){
      setisAdded(true);
      myfun()
      fname.current.value="";
      lname.current.value="";
      email.current.value="";
      
    }else if(res.data==="already subscribed"){
      setisAlready(true)
      myfun()
      fname.current.value="";
      lname.current.value="";
      email.current.value="";
    }else{

    }

      
  };

  return (
    <ThemeProvider theme={defaultTheme}>
    {isAdded?<Alert>Subscribed</Alert>:""}
    {isAlready?<Alert>Already Subscribed</Alert>:""}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <MailIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Subscribe
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  inputRef={fname}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  inputRef={lname}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputRef={email}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive info about offers,subscription charges via email."
                  inputRef={checkbox}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}