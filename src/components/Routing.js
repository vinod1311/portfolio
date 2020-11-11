import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {  Box } from "@material-ui/core";

import Home from "./Home";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

const Routing = () => {
  return (
    <React.Fragment>
        <Box mb={3}>
        <Header /> 
        </Box>
        
       <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/work" component={Work} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>  
       <Footer /> 
    </React.Fragment>
  );
};
export default Routing;
