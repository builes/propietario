import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import SearchInmueble from "./SearchInmueble";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "gray",
  },
  item: {
    marginTop: "1em",
  },
  text: {
    marginTop: "0.5em",
  },
}));

export default function Inicio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container container direction="row" justify="center">
        <Grid
          className={classes.item}
          item
          xs={10}
          style={{ textAlign: "center" }}
        >
          <Typography className={classes.text} variant="h4">
            Arrienda de manera facil
          </Typography>
          <Typography
            className={classes.text}
            variant="h4"
            style={{ marginBottom: "1em" }}
          >
            Arrienda sin salir de tu casa
          </Typography>
          <SearchInmueble />
          <Button style={{ marginTop: "1.2em" }}>Busqueda avanzada</Button>
          <Link to="/">
            <Typography className={classes.text}>
              Publica gratis tu propiedad con DreamHouse
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
}
