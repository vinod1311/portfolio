import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Container, Button,Box } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import MessageIcon from "@material-ui/icons/Message";

import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: "#FFFAFD",
  },
  content: {
    minHeight: 50,
  },
  media: {
    height: 62,
    paddingTop:'5px'
  },
  action: {
    backgroundColor: "#8A4BAF",
    color: "#FFFAFD",
  },
  linkArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A4BAF",
  },
  hireMe: {
    backgroundImage: `url(/homecontact1.png) `,
    height: "400px",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    color: "#FFFAFD",

  },
  contentText:{
    paddingTop:'100px'
  }
}));

const MobileView = () => {
  const classes = useStyles();
  return (
    <Grid container item justify="center">
      <Card className={classes.root}>
        <CardActionArea className={classes.action}>
          <CardMedia className={classes.media} title="Contemplative Reptile">
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <img src="/messenger.png" alt="" />
            </Grid>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2" color='inherit'>
              Project In Mind
            </Typography>
            <Typography variant="body2" component="p" color='inherit'>
              Hire me to carry out the following projects.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.linkArea}>
          <Button
            variant="contained"
            color="#FFFAFD"
            href="https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0"
          >
            Let's Talk
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const DesktopView = () => {
  const classes = useStyles();
  return (
    <Grid container xs={12} md={12} >
      <Container>
        <div className={classes.hireMe}>
          <Box className={classes.contentText}>
          <Grid container item direction="row" justify="center" alignItems="center">
            <Typography variant="h2" gutterBottom color="inherit">
              I'm Available for Freelancing
            </Typography>
          </Grid>
          <Grid container item direction="row" justify="center" alignItems="center">
            <Button
              variant="contained"
              color="#FFFAFD"
              size="large"
              href="https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0"
            >
              Let's Talk
            </Button>
          </Grid>
          </Box>
        </div>
      </Container>
    </Grid>
  );
};

const LetTalk = () => {
  const classes = useStyles();

  const matches = useMediaQuery("(min-width:600px)");
  return <div>{matches ? <DesktopView /> : <MobileView />}</div>;
};

export default LetTalk;
