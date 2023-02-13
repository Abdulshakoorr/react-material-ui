import { Box, Typography,Button } from "@mui/material";
import React from "react";
import Layout from "../Components/Layout/Layout";
import TextField from "@mui/material/TextField";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" textAlign={"center"}>
          Get in touch!
        </Typography>
        <p className="ptag">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
          Provident rerum recusandae dolorum sint quos eaque natus quaerat error
          tempore quam.
        </p>
      </Box>
      <div className="form-container">
      <Box sx={{display:"flex", flexDirection:"column",padding:4,width:350,gap:2, background:"#F8EBE3"}}>
      <Typography variant="h4" textAlign={"center"}>
          contact
        </Typography>
      <TextField
          id="filled-multiline-flexible"
          label="name"
          multiline
          maxRows={4}
          variant="filled"
        />
      <TextField
          id="filled-multiline-flexible"
          label="email"
          multiline
          maxRows={4}
          variant="filled"
        />
        
           <TextField
          id="filled-multiline-static"
          label="message"
          multiline
          rows={4}
          variant="filled"
        />
      <Button variant="contained">Send</Button>
      </Box>
      
      </div>
      
     



    </Layout>
  );
};

export default Contact;
