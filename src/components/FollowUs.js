import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Container,
  Link,
  Button,
} from "@material-ui/core";




const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
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
              item
              direction="row"
              justify="center"
              alignItems="center"
              sm={12}
              md={12}
              xs={12}
            >
              <h1>FOLLOW ME.</h1>
            </Grid>
          </Box>
          <Grid container spacing={1}>
            <Grid item container md={3} sm={3} xs={3} justify="center">
              <div className={classes.root}>
                <Link href="https://www.instagram.com/vinod_1311/">
                  <img src="/instagram.png" alt="" />
                </Link>
              </div>
            </Grid>
            <Grid item container md={3} sm={3} xs={3} justify="center">
              <div className={classes.root}>
                <Link href="https://www.facebook.com/vinod.panchal1311">
                  <img src="/facebook.png" alt="" />
                </Link>
              </div>
            </Grid>
            <Grid item container md={3} sm={3} xs={3} justify="center">
              <div className={classes.root}>
                <Link href="https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0">
                  <img src="/whatsapp.png" alt="" />
                </Link>
              </div>
            </Grid>
            <Grid item container md={3} sm={3} xs={3} justify="center">
              <div className={classes.root}>
                <Link href="https://www.linkedin.com/in/vinod-panchal-712812156">
                  <img src="/linkedin.png" alt="" />
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default FollowUs;
