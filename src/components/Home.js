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
        <Grid  item>
          <HomeAbout />
        </Grid>
        <Grid  item>
          <HomeServices />
        </Grid>
        <Box pt={2}>
        <Grid  item >
          <LetTalk />
        </Grid>
        </Box>
        <Grid  item>
          <FollowUs />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
