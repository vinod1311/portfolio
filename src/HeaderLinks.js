/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, Button} from "@material-ui/icons";

// core components
import CustomDropdown from "./CustomDropdown";
// import Button from "components/CustomButtons/Button.js";

import styles from "./components/headerLinksStyle";

const useStyles = makeStyles(styles);

const navLinks = [
  { title: `Home`, path: `/` },
  { title: `About`, path: `/about` },
  { title: `Work`, path: `/work` },
  { title: `Contact`, path: `/contact` },
];

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      
        <Tooltip>
        {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button className={classes.listItem}>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
        </Tooltip>
     
    </List>
  );
}
