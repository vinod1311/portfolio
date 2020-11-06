import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import desktopPersonal from "./desktopPersonal.png";
import mobileProfile from "./mobileProfile.png";

import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#FFFAFD",
    minHeight: 465,
  },
  content: {
    minHeight: 160,
  },
  media: {
    height: 80,
  },
  imageLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  box:{
    justifyContent: "center",
    alignItems: "center",
  }
}));
const HomeServices = () => {
  const classes = useStyles();
  const aboutImageUrl =
    window.innerWidth >= 600 ? desktopPersonal : mobileProfile;
  return (
    <div className="homeabout">
      <div>
        <Container>
          <Box alignCenter>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              sm={12}
              md={12}
            >
              <h1>SERVICES.</h1>
            </Grid>
          </Box>
          <Box className={classes.box}>
          <Grid
            spacing={2}
            container
            
            
          >
            <Grid item container md={3} sm={12} xs={12} justify="center">
              <Card className={classes.root} >
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <img src="/programming.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <h2 gutterBottom variant="h5" component="h2">
                      Web Development
                    </h2>
                    <p>
                      I build customized, scalable web applications using modern
                      web technologies and tools. I ensure all websites adhere
                      to insustry standards and deliver the best possible user
                      experience.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12} xs={12} align="center">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <img src="/smartphone.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <h2>MobileApp Development</h2>
                    <p>
                      I build customized, scalable MobileApp applications using
                      modern MobileApp technologies and tools. I ensure all
                      MobileApp adhere to insustry standards and deliver the
                      best possible user experience.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12} xs={12} align="center" >
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <img src="/uxdesign.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <h2>UX/UI</h2>
                    <p>
                      Ui can be presumed as a way of how a use interacts with
                      the web app while UX is about how the user feels ehile
                      using the app. Our speciakized designers assure you to get
                      the real advantage of UI/UX design with their creative and
                      analytical abilities.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12} xs={12} align="center">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <img src="/settings.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <h2>Website Management</h2>
                    <p>
                      I provide various website management options which include
                      - updating content, backing-up important data, monitoring
                      and security/software updates.
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default HomeServices;
