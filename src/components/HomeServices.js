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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import desktopPersonal from "./desktopPersonal.png";
import mobileProfile from "./mobileProfile.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#FFFAFD",
    minHeight:306,
    
  },
  content:{
    minHeight:160,
  },
  media: {
    height: 80,
  },
  imageLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  services:{
    backgroundColor:'#f1f2f6'
  }
}));
const HomeServices = () => {
  const classes = useStyles();
  const aboutImageUrl =window.innerWidth >= 600 ? desktopPersonal : mobileProfile;
  return (
    <div>
      <div className={classes.services}>
        <Container>
          <Box alignCenter>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              sm={12}
              md={12}
              spacing={1}
            >
              <Typography variant="h3" gutterBottom>
                SERVICES.
              </Typography>
            </Grid>
          </Box>
          <Grid container spacing={1}>
            <Grid item container md={3} sm={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid container direction="row" justify="center" alignItems="center">
                      <img src="/programming.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      
                    >
                      Web Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      I build customized, scalable web applications using modern web technologies and tools. I ensure all websites adhere to insustry standards and deliver the best possible user experience.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid container direction="row" justify="center" alignItems="center">
                      <img src="/smartphone.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      
                    >
                      MobileApp Development
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      I build customized, scalable MobileApp applications using modern MobileApp technologies and tools. I ensure all MobileApp adhere to insustry standards and deliver the best possible user experience.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid container direction="row" justify="center" alignItems="center">
                      <img src="/ux-design.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      justifyCenter
                      alignCenter
                    >
                      UX/UI
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Ui can be presumed as a way of how a use interacts with the web app while UX is about how the user feels ehile using the app. Our speciakized designers assure you to get the real advantage of UI/UX design with their creative and analytical abilities.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={3} sm={12}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  >
                    <Grid container direction="row" justify="center" alignItems="center">
                      <img src="/settings.png" alt="" />
                    </Grid>
                  </CardMedia>
                  <CardContent className={classes.content}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      justifyCenter
                      alignCenter
                    >
                      Website Management
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      I provide various website management options which include - updating content, backing-up important data, monitoring and security/software updates.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default HomeServices;
