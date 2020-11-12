import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Box, Button, Container } from "@material-ui/core";
import desktopPersonal from "./desktopPersonal.png";
import mobileProfile from "./mobileProfile.png";

import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({}));
const HomeAbout = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <div className="about">
      <Container>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <img src={matches ? mobileProfile : desktopPersonal} alt="" />
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Box pt={4}>
              <h1>ABOUT ME.</h1>
              <h2>
                I'm Vinod Panchal, <br/>a creative Web developer based in Ahmedabad,
                India.
              </h2>
              <p>
                I'm Freelance Fullstack developer, I'm passionate about creating
                and developing website.
              </p>
              <Button variant="contained" color="secondary" href="/about">
                Know More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomeAbout;
