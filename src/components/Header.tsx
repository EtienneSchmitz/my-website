import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
// import GitHubIcon from '@material-ui/icons/GitHub';
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <PersonIcon />
            </IconButton>
            Etienne Schmitz
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <Link href="/">
              <a>Mes informations</a>
            </Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <Link href="/skills">
              <a>Mes compétences</a>
            </Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <Link href="/study">
              <a>Mes études</a>
            </Link>
          </Typography>
          <Typography variant="h5" className={classes.title}>
            <Link href="/experiences">
              <a>Mes expériences</a>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
