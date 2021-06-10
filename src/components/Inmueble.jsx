import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Divider from "@material-ui/core/Divider";
import Carousel from "react-elastic-carousel";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";

const useStyles = makeStyles((theme) => ({
  text: {
    [theme.breakpoints.down("959")]: {
      margin: `20px`,
    },
  },
  divBotones: {
    width: "45%",
    [theme.breakpoints.down("959")]: {
      width: "100%",
    },
  },
  botones: {
    padding: "12px 0px",
    width: "33%",
  },
  cardAbsolute: {
    position: "absolute",
    right: 0,
    width: "30%",
    textAlign: "center",
    padding: "0.8em",
    borderRadius: 15,
    [theme.breakpoints.down("959")]: {
      display: "none",
    },
  },
  cardInnerMargin: {
    marginTop: 10,
    marginBottom: 10,
  },
  divFlex: {
    display: "flex",
    width: "30%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divFlexT: {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const breakPoints = [
  { width: 600, itemsToShow: 1 },

  { width: 1000, itemsToShow: 2 },
];

export default function Inmueble() {
  const classes = useStyles();

  const { id } = useParams();

  const [inmueble, setInmueble] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getInmueble() {
      try {
        const res = await axios.get(`http://localhost:3004/inmuebles/${id}`);
        console.log(res.data.photos);
        setInmueble(res.data);
        setPhotos(res.data.photos);
      } catch (error) {
        console.error(error);
      }
    }
    getInmueble();
  }, []);
  return (
    <Grid container justify="center">
      <Grid xs={12}>
        <Carousel breakPoints={breakPoints}>
          {photos.map((photo) => (
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              width="100%"
              image={photo}
            />
          ))}
        </Carousel>
      </Grid>
      <Grid item xs={7} style={{ position: "relative" }}>
        <Card className={classes.cardAbsolute}>
          <Typography
            className={classes.cardInnerMargin}
            align="left"
            variant={"h5"}
          >
            Arriendo de {inmueble.tipoInmueble}
          </Typography>
          <Typography
            align="left"
            variant={"h6"}
            className={classes.cardInnerMargin}
          >
            {inmueble.ciudad}, {inmueble.barrio}
          </Typography>

          <Typography
            align="justify"
            variant={"h5"}
            className={classes.cardInnerMargin}
          >
            ${Intl.NumberFormat("de-DE").format(inmueble.precio)}
          </Typography>
          <Button className={classes.cardInnerMargin} variant="contained">
            Agendar visita
          </Button>
        </Card>
        <Grid item xs={12}>
          <div className={classes.divBotones}>
            <Card>
              <Button className={classes.botones}>Fotos</Button>
              <Button className={classes.botones}>Videos</Button>
              <Button className={classes.botones}>Mapa</Button>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12} className={classes.text}>
          <Typography align="justify" variant={"h4"}>
            Arriendo de {inmueble.tipoInmueble}
          </Typography>

          <Typography align="justify" variant={"h5"}>
            {inmueble.ciudad}, {inmueble.barrio}
          </Typography>

          <Typography align="justify" variant={"h5"}>
            ${Intl.NumberFormat("de-DE").format(inmueble.precio)}
          </Typography>
          <Typography align="left" variant={"h6"}>
            {inmueble.direccion}
          </Typography>

          <Typography align="justify" variant={"body2"}>
            Estrato: {inmueble.estrato}
          </Typography>

          <div className={classes.divFlex}>
            <Typography
              gutterBottom
              variant="subtitle2"
              style={{ alignSelf: "center" }}
              className={classes.divFlexT}
            >
              <HomeOutlinedIcon />
              {inmueble.area}m<sup>2</sup>
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              style={{ alignSelf: "center" }}
              className={classes.divFlexT}
            >
              <HomeOutlinedIcon />
              {inmueble.area}m<sup>2</sup>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
