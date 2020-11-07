import React from "react";

import FollowUs from "./FollowUs";
import HomeAbout from "./HomeAbout";
import HomeServices from "./HomeServices";
import HeroContent from "./HeroContent";
import LetTalk from "./LetTalk";
import About from "./About";
import Contact from "./Contact";

import {
  Grid,
  Box
  
} from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <Grid >
        <Grid  item>
          <HeroContent />
        </Grid>
        <Box pt={5}>
        <Grid  item>
          <HomeAbout />
        </Grid>
        </Box>
        <Grid  item>
          <HomeServices />
        </Grid>
        <Box pt={2}>
        <Grid  item >
          <LetTalk />
        </Grid>
        </Box>
        <Box pb={3}>
        <Grid  item>
          <FollowUs />
        </Grid>
        </Box>
      </Grid>
    </div>
  );
};

export default Home;
