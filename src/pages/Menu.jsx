import React from "react";
import Layout from "../Components/Layout/Layout";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const data = [
  {
    id: 1,
    title: "Foodee yummy Chease",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/1265626/pexels-photo-1265626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Beef Cut",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "Delicious Korma",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/2116094/pexels-photo-2116094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Salad",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Nodeels jem",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    title: "Fried Eggs",
    des: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique quod perspiciatis amet ut asperiores, omnis assumenda accusamus. Omnis consequuntur obcaecati, rerum perferendis ea similique corrupti eaque? Maxime, sit vero. Nostrum!",
    img: "https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];
const Menu = () => {
  return (
    <Layout>
      <div style={{margin:"1rem ", padding:"1rem 3rem"}}>

      
      <Grid container gap={4} spacing={{ xs: 2, md: 3 }} rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data.map((item) => {
        return (
          <>
          <Grid spacing={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {
                    item.des
                  }
                </Typography>
              </CardContent>
              
              <CardActions>
                <Button size="small">Add To Cart</Button>
                <Button size="small" sx={{background:"orange", color:"black"}}>Order Now</Button>
              </CardActions>
            </Card>
            </Grid>
          </>
        );
      })}
      </Grid>
      </div>
    </Layout>
  );
};

export default Menu;
