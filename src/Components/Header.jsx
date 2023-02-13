import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Drawer, IconButton} from '@mui/material';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);



  // toggle function
  const handleToggle = () =>{
    setToggle(!toggle);
  }
  // menu drawer

  const drawer = (
    <Box onClick={handleToggle} sx={{textAlign:"center"}}>
       <Typography sx={{padding:2, bgcolor:"bisque"}}>
            <DinnerDiningIcon/>   Food Pyala
           
            </Typography>
           
              <ul className='mobile-nav'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>

    </Box>
  )


  return (
    <>
      <Box >
        <AppBar component={'nav'} sx={{bgcolor:"bisque",color:"chocolate",padding:{xs:1,sm:2}}}>
          <Toolbar 
           variant="h6"
           component="div"
           sx={{ flexGrow:1 ,display: "flex", alignItems: "center", justifyContent: "space-between"}}

           >
            <IconButton aria-label='open drawer' edge="start" sx={{mr:2, display:{sm:"none"}}} onClick={handleToggle}>
              <MenuIcon/>
            </IconButton>
            <Typography>
            <DinnerDiningIcon/>   Food Pyala
           
            </Typography>
            <Box sx={{display:{xs:"none", sm:"block"}}}>
              <ul>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>

            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={toggle} onClose={handleToggle} sx={{display:{xs:"block", sm:"none"}}}>
            {drawer}
          </Drawer>
        </Box>
       
       <Toolbar/> 
     
      </Box>
    </>
  )
}

export default Header