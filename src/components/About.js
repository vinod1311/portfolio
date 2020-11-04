import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Container,
  Link,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import desktopbg from "./aboutmebg.jpg";
import mobilebg from "./mobileaboutmebg.png";

import '../App.css'

const useStyles = makeStyles((theme) => ({
  heading: {
    paddingTop:'2px',
    paddingBottom:'5px'
  },
  
  bg: {
    backgroundColor: "#f1f2f6",
    padding: "5px",
  },
  aboutBg: {
    
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "noRepeat",
    marginBottom: "10px",
    marginTop: "10px",
  },
}));

const About = () => {
  const classes = useStyles();
  const aboutMeImageUrl = window.innerWidth >= 600 ? desktopbg : mobilebg;
  return (
    <div>
      <Container>
        <Box pt={4}>
          <Grid container>
            <Grid container item md={12} sm={12} xs={12}>
              <h2>
                About
              </h2>
              <h1>
                I'm Vinod Panchal, a creative fullstack developer based in
                Ahmedabad, India.
              </h1>
            </Grid>
            <Box className={classes.bg}>
              <Grid container>
                <Grid container item md={6} sm={12} xs={12}>
                  <Box className={classes.heading}>
                    <p className='subheader'>
                      01
                    </p>
                    <p className='subheader'>
                      BACKGROUND
                    </p>
                  </Box>
                  <Box className={classes.paragraph}>
                    <p
                    >
                      I have attained a B.E in Computer Engineering from
                      Government Engineering Collage, Gandhinagar Sec-28.
                      Although I primarilly work as a freelance fullstack
                      developer,
                    </p>
                  </Box>
                </Grid>
                <Grid container item md={6} sm={12} xs={12}>
                  <Box className={classes.heading}>
                    <p className='subheader'>02</p>
                    <p className='subheader'>LANGUAGES</p>
                  </Box>
                  <Box className={classes.paragraph}>
                    <p
                    >
                      I utilize the following programming languages to build the
                      backbone of effeicient, future-proof websites.
                    </p>

                    <Grid container>
                      <Grid container item md={12} sm={12} xs={12}>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            HTML 5
                          </div>
                        </Grid>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            CSS3
                          </div>
                        </Grid>
                      </Grid>
                      <Grid container item md={12} sm={12} xs={12}>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            SCSS
                          </div>
                        </Grid>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            Javascript
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid container item md={6} sm={12} xs={12}>
                  <Box className={classes.heading}>
                    <p className='subheader'>03</p>
                    <p className='subheader'>PLATFORMS</p>
                  </Box>
                  <Box className={classes.paragraph}>
                    <p
                    >
                      I also use the following platforms and tools.
                    </p>
                    <Grid container>
                      <Grid container item md={12} sm={12} xs={12}>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            Bootstrap
                          </div>
                        </Grid>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            ReactStrap
                          </div>
                        </Grid>
                      </Grid>
                      <Grid container item md={12} sm={12} xs={12}>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            React JS
                          </div>
                        </Grid>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            Material UI
                          </div>
                        </Grid>
                      </Grid>
                      <Grid container item md={12} sm={12} xs={12}>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            GIT Version Control
                          </div>
                        </Grid>
                        <Grid container item md={6} sm={6} xs={6}>
                          <div
                            style={{
                              display: "inline-flex",
                              VerticalAlign: "text-bottom",
                              BoxSizing: "inherit",
                              textAlign: "center",
                              AlignItems: "center",
                            }}
                          >
                            <AddIcon fontSize="default" />
                            API's
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid container item md={6} sm={12} xs={12}>
                  <Box className={classes.heading}>
                    <p className='subheader'>04</p>
                    <p className='subheader'>LET'S TALK</p>
                  </Box>
                  <Box className={classes.paragraph}>
                    <p>
                      I often work with individuals, small businesses and
                      startups buiding anything from brochures, portfolios and
                      blogs to more advanced websites like eCommerce stores.
                      Each project is a collaboration, you'll always have your
                      say and I'll always give an honest opinion on what I think
                      will benefit your business the most. If this sounds like
                      the kind of partnership you'd like,
                      <Link href="https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0">
                        don't hesitate to get in touch
                      </Link>
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Box className={classes.aboutBg } style={{backgroundImage: `url(${aboutMeImageUrl}) `,}} >
          
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export default About;
