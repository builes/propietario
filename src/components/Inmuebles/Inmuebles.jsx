import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { Block } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SingleBed from "@material-ui/icons/SingleBed";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "40vh%",
    marginTop: 30,
    marginBottom: 30,

    [theme.breakpoints.up("280")]: {
      width: `70vw`,
    },
    [theme.breakpoints.up("600")]: {
      width: `40vw`,
    },

    [theme.breakpoints.up("814")]: {
      width: `28vw`,
    },
    [theme.breakpoints.up("1170")]: {
      width: `22vw`,
    },
  },
  media: {
    height: 340,
    width: "100%",
  },
  p: {
    position: "absolute",
    width: "100%",
    color: "white",
    textAlign: "center",
    fontSize: "2em",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("334")]: {
      display: "block",
    },
  },
}));

export default function Inmuebles({
  id,
  ciudad,
  barrio,
  area,
  habitaciones,
  baños,
  precio,
  photo,
  tipoInmueble,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Link to={"inmueble/" + id} style={{ textDecoration: "none" }}>
          <CardMedia
            className={classes.media}
            image={photo}
            title={"inmueble " + id}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="caption" component="h2">
            {tipoInmueble}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="h2">
            {ciudad + ","} {barrio}
          </Typography>
          <div className={classes.div}>
            <Typography
              className={classes.div}
              gutterBottom
              variant="subtitle2"
              style={{ alignSelf: "center" }}
            >
              <HomeOutlinedIcon />
              {area}m<sup>2</sup>
            </Typography>

            <Typography
              className={classes.div}
              gutterBottom
              variant="subtitle2"
              component="h2"
            >
              <SingleBed />
              {habitaciones}hab
            </Typography>
            <Typography
              className={classes.div}
              gutterBottom
              variant="subtitle2"
              component="h2"
            >
              <span className="material-icons-outlined">shower</span>
              {baños}baños
            </Typography>
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            ${Intl.NumberFormat("de-DE").format(precio)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
