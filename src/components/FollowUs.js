import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Container,
  Link
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

import CardMedia from "@material-ui/core/CardMedia";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 256,
    backgroundColor: "#FFFFF",
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
    backgroundColor: "#FFFFF",
  },
  linkArea:{
    justifyContent: "center",
    alignItems: "center",
    fontSize:'20px'
  }
}));
const FollowUs = () => {
  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.services}>
        <Container>
          <Box alignCenter pt={2} pb={1}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              sm={12}
              md={12}
              xs={12}
              
            >
              <h1>
               FOLLOW ME.
              </h1>
            </Grid>
          </Box>
          <Grid container spacing={1}>
            <Grid item container md={3} sm={12} xs={12} justify="center">
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
                  <Link href="https://www.instagram.com/vinod_1311/"  color="inherit">
                    vinod_1311
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item container md={3} sm={12} xs={12} justify="center">
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
                  <Link href="https://www.facebook.com/vinod.panchal1311"  color="inherit">
                    vinod panchal
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item container md={3} sm={12} xs={12} justify="center">
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
            <Grid item container md={3} sm={12} xs={12} justify="center">
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
                  <Link href="https://www.linkedin.com/in/vinod-panchal-712812156"  color="inherit">
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
