import React from "react";
import { Typography, ListItem, List, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  iconList: {
    display: "inline",
  },
  footerCss: {
    backgroundColor: "#1e272e",
    color: "#f5f6fa",
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: '100px'
  },
});
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footerCss}>
        <Grid>
          <Grid
            direction="column"
            container
            justify="center"
            alignItems="center"
          >
            <List>
              <ListItem className={classes.iconList}>
                <InstagramIcon />
              </ListItem>
              <ListItem className={classes.iconList}>
                <FacebookIcon />
              </ListItem>
              <ListItem className={classes.iconList}>
                <LinkedInIcon />
              </ListItem>
              <ListItem className={classes.iconList}>
                <WhatsAppIcon />
              </ListItem>
            </List>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography body1>
              © Vinod Panchal 2020 | All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};
export default Footer;
