import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  Button,
  ListItem,
  List,
  Link,
} from "@material-ui/core";
import Image from 'material-ui-image'
import '../App.css'

import Contact from "./Contact";

import PersonIcon from "@material-ui/icons/Person";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

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
    paddingTop: "50px",
    paddingLeft: "50px",
  },
  heroImg: {
    paddingTop: "50px",
  },
  vinod: {
    color: "#8A4BAF",
  },
}));
const HeroContent = () => {
  const classes = useStyles();
   const heroImageUrl = window.innerWidth >= 600 ? desktopbg : mobilebg;

  return (
    <div className={classes.herocontent}>
      <Grid container>
        <Grid container item md={6} sm={12} xs={12}>
          <Box className={classes.heroText}>
            <Box pb={2}>
              <h1 >
                Hii!
              </h1>
              <h1 >
                I'm <b className={classes.vinod}>Vinod,</b>
              </h1>
              <h1 >
                Web Developer.
              </h1>
              <h4>
                Freelance Web And Mobile App.
              </h4>
            </Box>
            <Box pb={2}>
              <Button
                variant="contained"
                color="secondary"
                gutterBottom
                startIcon={<PersonIcon />}
                href="/contact"
                
              >
                Contact ME
              </Button>
            </Box>
            <List>
              <ListItem className={classes.iconList}>
                <Link
                  href="https://www.instagram.com/vinod_1311/"
                  color="inherit"
                >
                  <InstagramIcon fontSize='default' />
                </Link>
              </ListItem>
              <ListItem className={classes.iconList}>
                <Link
                  href="https://www.facebook.com/vinod.panchal1311"
                  color="inherit"
                >
                  <FacebookIcon fontSize="default" />
                </Link>
              </ListItem>
              <ListItem className={classes.iconList}>
                <Link
                  href="https://www.linkedin.com/in/vinod-panchal-712812156"
                  color="inherit"
                >
                  <LinkedInIcon fontSize="default" />
                </Link>
              </ListItem>
              <ListItem className={classes.iconList}>
                <Link
                  href="https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0"
                  color="inherit"
                >
                  <WhatsAppIcon fontSize="default" />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} xs={12} item>
           <Box className={classes.heroImg}>
            <img src={heroImageUrl}   />
          </Box> 
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroContent;
