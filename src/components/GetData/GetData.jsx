import { Box, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Inicio from "../Inicio/Inicio";
import Inmuebles from "../Inmuebles/Inmuebles";
import { store } from "../../firebase/firebaseFirestore";

const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 480, itemsToShow: 2 },
  { width: 694, itemsToShow: 3 },
  { width: 1050, itemsToShow: 4 },
];

export default function GetData() {
  const [search, setSearch] = useState("");
  const [inmuebles, setInmuebles] = useState([]);

  //este useeffect tiene funcionalidad si corremos json server y consumimos los datos con axios
  // useEffect(() => {
  //   async function getInmuebles() {
  //     try {
  //       const res = await axios.get("http://localhost:3004/inmuebles");
  //       setInmuebles(res.data);
  //       console.log(res.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getInmuebles();
  // }, []);

  useEffect(() => {
    const getPropiedades = async () => {
      //Asi consultamos los datos que tengamos en la collecion agenda
      //docs seria la constante con los datos de la coleccion
      const { docs } = await store.collection("propiedades").get();
      //console.log(docs);
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      console.log(newArray);
      setInmuebles(newArray);
    };
    getPropiedades();
  }, []);

  return (
    <Grid container container direction="row" justify="center">
      <Grid item xs={11}>
        <Inicio />
        <Typography variant="h4" style={{ textAlign: "center" }}>
          Ultimas publicaciones en arriendo
        </Typography>
        <Carousel breakPoints={breakPoints}>
          {inmuebles.map((inmueble) => (
            <Inmuebles
              key={inmueble.id}
              id={inmueble.id}
              ciudad={inmueble.ciudad}
              barrio={inmueble.barrio}
              area={inmueble.area}
              habitaciones={inmueble.habitaciones}
              baños={inmueble.banos}
              precio={inmueble.precio}
              photo={inmueble.photos[1]}
              tipoInmueble={inmueble.tipoInmueble}
            />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
}
