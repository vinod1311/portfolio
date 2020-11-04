import React from "react";
import { Grid, Typography, Box, Container } from "@material-ui/core";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

import { makeStyles } from "@material-ui/core/styles";

import DesktopImg from './contactus1.png'
import MobileImg from './contactus2.png'

const useStyles = makeStyles((theme) => ({

  contactBg: {
    
    height: "100vh",
    width:'100%',
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    marginBottom: "10px",
    marginTop: "10px",
  },
}));


const Contact = () => {

  const classes = useStyles();

  const aboutImageUrl = window.innerWidth >= 600 ? DesktopImg : MobileImg;

  return (
    <div>
      <Container>
        <Grid container>
          <Box className={classes.contactBg} style={{backgroundImage: `url(${aboutImageUrl}) `,}}>

          </Box>

          <Box pb={7} pt={1}>
            <h1>
              Let's build something great together.
            </h1>
            <h1>
              If you'd like to start a new project, need help with an existing
              project or have any other enquiry, please get in touch.
            </h1>
          </Box>
          
            <Grid container>
              <Grid container item md={4} sm={12} xs={12}>
                <div
                  style={{
                    display: "inline-flex",
                    VerticalAlign: "text-bottom",
                    BoxSizing: "inherit",
                    textAlign: "center",
                    AlignItems: "center",
                  }}
                >
                  <EmailOutlinedIcon fontSize="large" />
                  <Box pl={2}>
                    <Typography variant="h6" gutterBottom color="inherit">
                      contactvinod13@gmail.com
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid container item md={4} sm={12} xs={12}>
                <div
                  style={{
                    display: "inline-flex",
                    VerticalAlign: "text-bottom",
                    BoxSizing: "inherit",
                    textAlign: "center",
                    AlignItems: "center",
                  }}
                >
                  <PhoneIphoneOutlinedIcon fontSize="large" />
                  <Box pl={2}>
                    <Typography variant="h6" gutterBottom color="inherit">
                      +91 9925065608
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid container item md={4} sm={12} xs={12}>
                <div
                  style={{
                    display: "inline-flex",
                    VerticalAlign: "text-bottom",
                    BoxSizing: "inherit",
                    textAlign: "center",
                    AlignItems: "center",
                  }}
                >
                  <LocationOnOutlinedIcon fontSize="large" />
                  <Box pl={2}>
                    <Typography variant="h6" gutterBottom color="inherit">
                      Ahmedabad,India
                    </Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>
          
        </Grid>
      </Container>
    </div>
  );
};
export default Contact;
