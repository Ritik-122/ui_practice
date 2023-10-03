import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import "../styles/home.css";
const Unsubscribe = () => {
  const email = useRef();

  const [isDelete, setDelete] = useState(false);
  const myfun = () => {
    setTimeout(() => {
      setDelete(false);
    }, 3000);
  };
  const handleClick = async () => {
    const mail = email.current.value;
    const res = await axios.post("http://localhost:5000/unsubscribe", {
      email: mail,
    });
    if (res.data === "deleted") {
      setDelete(true);
      console.log(res.data);
      myfun();
    }
  };
  return (
    <>
      {isDelete ? <Alert>Unsubscribed</Alert> : ""}
      <Box
        focused
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
        mt={10}
      >
        <Stack direction="column" spacing={2}>
          <TextField
            fullWidth
            inputRef={email}
            label="Email"
            focused
            required
            sx={{
              input: {
                color: "#ffffff",
              },
              label: {
                color: "#ffffff",
              },
            }}
          />
          <Button className="designedbutton" onClick={handleClick}>
            Unsubscribe
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Unsubscribe;
