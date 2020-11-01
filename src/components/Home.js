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
import useMediaQuery from "@material-ui/core/useMediaQuery";


import PersonIcon from "@material-ui/icons/Person";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";

import desktopbg from "./desktopbg1.png";
import mobilebg from "./bgremove.png";



const useStyles = makeStyles((theme) => ({
  herocontent: {
    height: "100vh",
    backgroundColor: "#FFFFFF",
  },
  iconList: {
    display: "inline",
    color: "#663399",
  },
  heroText: {
    paddingTop: "100px",
    paddingLeft: "50px",
  },
  heroImg: {
    paddingTop: "100px",
  },
  vinod: {
    color: "#8A4BAF",
  },
  hireMe: {
    height: "70vh",
    backgroundImage: "url(/homecontact1.png)",
  },
  root: {
    maxWidth: 345,
    backgroundColor: "#FFFAFD",
    
  },
  content:{
    minHeight:160
  },
  media: {
    height: 80,
  },
}));
const Home = () => {
  const classes = useStyles();
  const heroImageUrl = window.innerWidth >= 600 ? desktopbg : mobilebg;
 
  // const matches = useMediaQuery(theme => theme.breakpoints.down('md'));
  return (
    <div>
      <div className={classes.herocontent}>
        <Grid container>
          <Grid item md={6} sm={6}>
            <Box className={classes.heroText}>
              <Box pb={2}>
                <Typography variant="h3" gutterBottom>
                  Hii!
                </Typography>
                <Typography variant="h3" gutterBottom>
                  I'm <b className={classes.vinod}>Vinod</b>
                </Typography>
                <Typography variant="h3" gutterBottom>
                  Web Developer.
                </Typography>
                <Typography variant="h6" gutterBottom>
                  <b>Freelance Web And Mobile App.</b>
                </Typography>
              </Box>
              <Box pb={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  gutterBottom
                  startIcon={<PersonIcon />}
                >
                  Contact ME
                </Button>
              </Box>
              <List>
                <ListItem className={classes.iconList}>
                  <InstagramIcon fontSize="large" />
                </ListItem>
                <ListItem className={classes.iconList}>
                  <FacebookIcon fontSize="large" />
                </ListItem>
                <ListItem className={classes.iconList}>
                  <LinkedInIcon fontSize="large" />
                </ListItem>
                <ListItem className={classes.iconList}>
                  <WhatsAppIcon fontSize="large" />
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={6} sm={6} item>
            <Box className={classes.heroImg}>
              <img src={heroImageUrl} alt="" />
            </Box>
          </Grid>
        </Grid>
      </div>
      <div>
        <HomeAbout/>
      </div>
      <div>
        <HomeServices />
      </div>
      <div>
        {/* {
          matches = true ? (
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
          ) : (
            <Grid container xs={12} md={12}>
              <Container>
                <div className={classes.hireMe}>
                  <Typography variant="h3" gutterBottom color="inherit">
                    Hii!
                  </Typography>
                </div>
              </Container>
            </Grid>
          )
        } */}
      </div>
    </div>
  );
};

export default Home;
