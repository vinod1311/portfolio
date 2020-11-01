import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Button,
  ListItem,
  List,
  Container,
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
          <Box alignCenter>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
              md={12}
            >
              <Typography variant="h3" gutterBottom>
                ABOUT ME.
              </Typography>
            </Grid>
          </Box>
          <Grid container>
            <Grid item md={6} sm={12}>
              <Box>
                <img src={aboutImageUrl} alt="" />
              </Box>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box pt={4}>
                <Typography variant="h5" gutterBottom>
                  I'm Vinod Panchal, a creative Web developer based in
                  Ahmedabad, India.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  I'm Freelance Fullstack developer, I'm passionate about
                  creating and developing website.
                </Typography>
                <Button variant="contained" color="secondary">
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
