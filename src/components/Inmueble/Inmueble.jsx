import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Carousel from "react-elastic-carousel";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SingleBed from "@material-ui/icons/SingleBed";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import PetsIcon from "@material-ui/icons/Pets";
import Videos from "../Videos/Videos";
import Maps from "../Maps/Maps";
import { store } from "../../firebase/firebaseFirestore";
import planos from "./plano.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "50vw",
    margin: "auto",
  },
  allText: {
    textAlign: "justify",
    fontFamily: "Roboto",
  },

  text: {
    [theme.breakpoints.down("959")]: {
      margin: `20px`,
    },
  },
  divBotones: {
    width: "60%",
    [theme.breakpoints.down("959")]: {
      width: "100%",
    },
  },
  botones: {
    padding: "12px 0px",
    width: "25%",
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
  divGrid: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    width: "65%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divFlexT: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    fontSize: "1.5em",
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
  const [lugaresCercanos, setLugaresCercanos] = useState([]);
  const [opcion, setOpcion] = useState("fotos");
  const [color, setColor] = useState(false);

  // useEffect(() => {
  //   async function getInmueble() {
  //     try {
  //       const res = await axios.get(`http://localhost:3004/inmuebles/${id}`);
  //       setInmueble(res.data);
  //       setPhotos(res.data.photos);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getInmueble();
  // }, []);

  useEffect(() => {
    const getPropiedades = async () => {
      //Asi consultamos los datos que tengamos en la collecion agenda
      //docs seria la constante con los datos de la coleccion
      const docs = await (
        await store.collection("propiedades").doc(id).get()
      ).data();
      console.log(docs);
      setInmueble(docs);
      setPhotos(docs.photos);
      setLugaresCercanos(docs.lugaresCercanos);
    };
    getPropiedades();
  }, []);

  return (
    <Grid container justify="center" className={classes.allText}>
      <Grid xs={12}>
        {opcion === "fotos" ? (
          <Carousel breakPoints={breakPoints}>
            {photos.map((photo) => (
              <CardMedia
                className={classes.media}
                component="img"
                image={photo}
              />
            ))}
          </Carousel>
        ) : opcion === "video" ? (
          <Videos />
        ) : opcion === "mapa" ? (
          <Maps />
        ) : (
          <CardMedia
            className={classes.media}
            component="img"
            image={planos}
            width="100px"
          />
        )}
      </Grid>
      <Grid item xs={7} style={{ position: "relative" }}>
        <Card className={classes.cardAbsolute}>
          <Button
            className={classes.cardInnerMargin}
            size="large"
            variant="contained"
            color="primary"
          >
            <Link
              to="#"
              style={{
                textDecoration: "none",
                color: "white",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              Compartir
            </Link>
          </Button>
        </Card>
        <Grid item xs={12}>
          <div className={classes.divBotones}>
            <Card>
              <Button
                className={classes.botones}
                onClick={() => {
                  setOpcion("fotos");
                }}
              >
                Fotos
              </Button>
              <Button
                className={classes.botones}
                onClick={() => {
                  setOpcion("video");
                }}
              >
                Video
              </Button>
              <Button
                className={classes.botones}
                onClick={() => {
                  setOpcion("planos");
                }}
              >
                Planos
              </Button>
              <Button
                className={classes.botones}
                onClick={() => {
                  setOpcion("mapa");
                }}
              >
                Mapa
              </Button>
            </Card>
          </div>
        </Grid>

        <Grid item xs={12}>
          <Typography align="justify" variant={"h4"}>
            Arriendo de {inmueble.tipoInmueble}
          </Typography>

          <Typography align="justify" variant={"h5"}>
            {inmueble.ciudad}, {inmueble.barrio}
          </Typography>

          <Typography align="left" variant={"h6"}>
            {inmueble.direccion}
          </Typography>

          <Typography align="justify" variant={"h6"}>
            Estrato: {inmueble.estrato}
          </Typography>
          <Typography align="justify" variant={"h4"}>
            ${Intl.NumberFormat("de-DE").format(inmueble.precio)}
          </Typography>

          <div className={classes.divGrid}>
            <Typography
              gutterBottom
              variant="subtitle2"
              className={(classes.divFlexT, classes.subtitle)}
            >
              <HomeOutlinedIcon fontSize="large" />
              {inmueble.area}m<sup>2</sup>
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={(classes.divFlexT, classes.subtitle)}
            >
              <SingleBed fontSize="large" />
              {inmueble.habitaciones}{" "}
              {inmueble.habitaciones > 1 ? "habitaciones" : "habitacion"}
            </Typography>
          </div>
          <div className={classes.divGrid}>
            <Typography
              gutterBottom
              variant="subtitle1"
              className={(classes.divFlexT, classes.subtitle)}
            >
              <DriveEtaOutlinedIcon fontSize="large" />
              {inmueble.parqueadero}
            </Typography>
            <Typography
              variant="subtitle2"
              className={(classes.divFlexT, classes.subtitle)}
            >
              <span
                className="material-icons-outlined"
                style={{
                  fontSize: "1.5em",
                  height: "100% !important",
                }}
              >
                shower
              </span>
              {inmueble.banos} {inmueble.banos > 1 ? "baños" : "baño"}
            </Typography>
          </div>
          <div>
            <Typography
              variant="subtitle2"
              className={(classes.divFlexT, classes.subtitle)}
            >
              <PetsIcon />
              {inmueble.pets}
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Lugares Cercanos</Typography>
            {lugaresCercanos.map((item) => (
              <Typography variant="h6">{item}</Typography>
            ))}
          </div>
          <div>
            <Typography variant="subtitle" align="center">
              {inmueble.descripcion}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
