import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  botones: {
    marginRight: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Inicio
            </Link>
          </Typography>

          <Button>
            <Link
              to="../login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Iniciar Sesion
            </Link>
          </Button>
          <Button>
            <Link
              to="../registro"
              style={{ textDecoration: "none", color: "white" }}
            >
              registrarse
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
