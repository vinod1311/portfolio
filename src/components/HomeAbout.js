import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Button,
  Container
} from "@material-ui/core";
import desktopPersonal from "./desktopPersonal.png";
import mobileProfile from "./mobileProfile.png";

const useStyles = makeStyles((theme) => ({}));
const HomeAbout = () => {
  const classes = useStyles();
  const aboutImageUrl = window.innerWidth >= 600 ? desktopPersonal : mobileProfile;
    
  return (

    <div>
      <div className="about">
        <Container>
          
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <Box>
                <img src={aboutImageUrl} alt="" />
              </Box>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
            
              
            
              <Box pt={4}>
              <h1>
                ABOUT ME.
              </h1>
                <h2 className='gutterBottom'>
                  I'm Vinod Panchal, a creative Web developer based in
                  Ahmedabad, India.
                </h2>
                <p className='gutterBottom'>
                  I'm Freelance Fullstack developer, I'm passionate about
                  creating and developing website.
                </p>
                <Button variant="contained" color="secondary" href='/about'>
                  Know More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomeAbout;
