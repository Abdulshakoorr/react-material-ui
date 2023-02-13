import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div style={{backgroundImage:`url("https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover",backgroundBlendMode:"hard-light",backgroundAttachment:"fixed"}}>
     
        <Box sx={{padding:{xs:2,sm:8}}}>
          <div className="home" style={{minHeight:"80vh"}}>
            <div className="content-contaner">
              <h1>The house of Trendy Food</h1>
              <p className='ptag'>
                Lorem ipsum dolor sit amet consectetur, 
                <br/>
                 adipisicing elit. Laboriosam hic quod velit. <br/> Quas possimus similique qui aspernatur officia, <br/> placeat molestiae.
              </p>
              <Link to="/menu">
                <button className='btn-order'>Order Now!</button>
              </Link>
            </div>
          </div>
        </Box>
      </div>
    </Layout>
  )
}

export default Home