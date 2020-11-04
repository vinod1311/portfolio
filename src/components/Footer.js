import React from "react";
import { Typography, ListItem, List, Grid , Link} from "@material-ui/core";
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
    position: 'sticky',
    bottom:0,
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
                
                <Link href='https://www.instagram.com/vinod_1311/' color='inherit'>
                  <InstagramIcon />
                </Link>
                
              </ListItem>
              <ListItem className={classes.iconList}>
              <Link href='https://www.facebook.com/vinod.panchal1311' color='inherit'>
                <FacebookIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.iconList}>
              <Link href='https://www.linkedin.com/in/vinod-panchal-712812156' color='inherit'>
                <LinkedInIcon />
                </Link>
              </ListItem>
              <ListItem className={classes.iconList}>
              <Link href='https://api.whatsapp.com/send/?phone=919925065608&text=I%27m+Looking+For&app_absent=0' color='inherit'>
                <WhatsAppIcon />
                </Link>
              </ListItem>
            </List>
          </Grid>

          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography gutterBottom color='inherit'>
              © Vinod Panchal 2020 | All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};
export default Footer;
