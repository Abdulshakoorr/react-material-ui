import React from 'react'
import {Box, Typography} from '@mui/material'
import Layout from '../Components/Layout/Layout'
import ImgList from '../Components/ImgList'

const About = () => {
  return (
    <Layout>
     <Box sx={{minHeight:"90vh"}}>
      <Typography variant='h3' textAlign="center" padding={4}>
        Welcome To Food Pyala
      </Typography>
      <div style={{backgroundImage:`url("https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,backgroundRepeat:"no-repeat", backgroundPosition:"center",backgroundSize:"cover",backgroundBlendMode:"hard-light",backgroundAttachment:"fixed",height:"40vh"}}>
      </div>
      <Typography variant='h5' textAlign="center" padding={2}>
        About Us
      </Typography>
      <ImgList/>
      <p className='ptag' style={{padding:"4rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, natus dolores! Molestiae voluptates iusto laboriosam? Perferendis quam magnam facilis illum? Repellendus, cupiditate facilis a sint eum iste dolor earum veniam quod sapiente harum iusto unde explicabo eaque ab ullam est numquam esse nemo reiciendis? Consequuntur, laudantium? Commodi repellendus eaque veritatis facilis, iste minus? Sint fugiat recusandae inventore minima iste culpa nihil architecto laudantium facere vel molestias quos consequuntur neque at provident aperiam a alias, numquam optio fugit eligendi. Impedit, aspernatur veritatis<br /> <br/> placeat maxime corrupti provident harum qui aliquam saepe commodi reiciendis nam sapiente a quia libero nihil iusto soluta nemo? Odit, earum neque? Accusantium sapiente excepturi deserunt temporibus sed veritatis fugiat ullam facilis repudiandae saepe similique, minus suscipit nemo sequi consequuntur labore, eligendi, voluptate perferendis. Iure doloribus nostrum corrupti incidunt consequuntur? Quas ullam autem perferendis eaque sapiente repellat distinctio sint accusantium, accusamus, nihil ducimus sit, non aut ad possimus maiores numquam officia et iure fugiat. Rerum est quaerat ipsam beatae impedit cupiditate voluptas cum magnam, voluptate quae perspiciatis excepturi sunt consequatur itaque repellendus exercitationem error. Maxime unde et debitis libero repudiandae asperiores nesciunt accusamus tempora illum laboriosam ullam expedita,<br /> <br/> aliquam dignissimos quae perspiciatis distinctio assumenda tempore ipsam facere nemo? Reprehenderit inventore nisi unde illum optio nam corporis ad minus dolor alias aliquid quae debitis rerum necessitatibus voluptates ntore dolore nostrum eum ipsa ea blanditiis, officia molestiae, voluptatem quibusdam magni magnam delectus pariatur. Nulla, aspernatur hic repellendus perferendis natus velit eaque vel recusandae nobis, ratione molestias magnam quisquam iste sunt quam quis rem nam et at sequi porro mollitia facere ex? Aliquam dolor officiis odio dignissimos sequi placeat magnam aliquid aspernatur ipsa,<br /> <br/>sam aspernatur eos necessitatibus officiis, voluptate tempore cum sed quia assumenda mollitia sunt similique tenetur ex sequi quidem laudantium ut! Recusandae quibusdam eligendi corrupti iusto alias modi cupiditate dolore autem repellendus voluptatem ab fugiat explicabo cum a <br /> <br/> id maxime quod esse sed numquam eum fuga. Nihil, quibusdam. Expedita, tempora. 
      </p>
     </Box>
    </Layout>
  )
}

export default About