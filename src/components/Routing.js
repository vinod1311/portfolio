import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home'
import About from './About'
import Work from './Work'
import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'

const Routing = () => {
    return(
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/work" component={Work} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}
export default Routing