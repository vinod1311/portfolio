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
  Link,
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
    maxWidth: 256,
    backgroundColor: "#FFFAFD",
    maxHeight: 306,
  },
  media: {
    height: 256,
  },
  imageLogo: {
    justifyContent: "center",
    alignItems: "center",
  },
  services: {
    backgroundColor: "#f1f2f6",
  },
  linkArea:{
    justifyContent: "center",
    alignItems: "center",
    fontSize:'20px'
  }
}));
const FollowUs = () => {
  const classes = useStyles();
  const aboutImageUrl =
    window.innerWidth >= 600 ? desktopPersonal : mobileProfile;
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
                    <Grid
                      container
                      direction="row"
                      justify="center"
                      alignItems="center"
                    >
                      <img src="/instagram.png" alt="" />
                    </Grid>
                  </CardMedia>
                </CardActionArea>
                <CardActions className={classes.linkArea}>
                  <Link href="#"  color="inherit">
                    vinod_1311
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item container md={3} sm={12}>
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
                      <img src="/facebook.png" alt="" />
                    </Grid>
                  </CardMedia>
                </CardActionArea>
                <CardActions className={classes.linkArea}>
                  <Link href="#"  color="inherit">
                    vinod panchal
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item container md={3} sm={12}>
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
                      <img src="/gmail.png" alt="" />
                    </Grid>
                  </CardMedia>
                </CardActionArea>
                <CardActions className={classes.linkArea}>
                  <Link href="#"  color="inherit">
                    contactvinod13@gmail.com
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item container md={3} sm={12}>
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
                      <img src="/linkedin.png" alt="" />
                    </Grid>
                  </CardMedia>
                </CardActionArea>
                <CardActions className={classes.linkArea}>
                  <Link href="#"  color="inherit">
                    Vinod Panchal
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default FollowUs;
