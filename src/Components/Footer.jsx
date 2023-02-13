import { Typography } from '@mui/material'
import  Box  from '@mui/material/Box'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

const Footer = () => {
  let date = new Date().getFullYear()
  return (
    <footer>
      <Box sx={{textAlign:"center",boxShadow:"0px 0px 6px #00000050", padding:4,display:'flex',alignItems:"center", justifyContent:"center", flexDirection:"column"}} >
      <Box sx={{padding:2 , "& svg":{
        cursor:'pointer',
        mr:2
      },"& svg:hover":{
        color:"goldenrod",
        transform:"translateX(-5px)",
        transition: "all 400ms ease-in-out",
      }}}>
        {/* icons */}
        <FacebookOutlinedIcon/>
        <WhatsAppIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
      </Box>
      <Typography variant="p" component="p" 
      sx={{"@media(max-width:600px)":{
        fontSize:"1rem",
      },
      }}>
  All Rights Reserved &copy; Abdul Shakoor {date}
</Typography>
      </Box>
    </footer>
  )
}

export default Footer