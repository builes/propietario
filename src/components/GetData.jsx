import { Box, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import Inicio from "./Inicio";
import Inmuebles from "./Inmuebles";
const breakPoints = [
  { width: 300, itemsToShow: 1 },
  { width: 480, itemsToShow: 2 },
  { width: 694, itemsToShow: 3 },
  { width: 1050, itemsToShow: 4 },
];

export default function GetData() {
  const [search, setSearch] = useState("");
  const [inmuebles, setInmuebles] = useState([]);

  useEffect(() => {
    async function getInmuebles() {
      try {
        const res = await axios.get("http://localhost:3004/inmuebles");
        setInmuebles(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getInmuebles();
  }, []);

  return (
    <>
      <Inicio />
      <Typography variant="h4">Ultimas publicaciones en arriendo</Typography>
      <Carousel breakPoints={breakPoints}>
        {inmuebles.map((inmueble) => (
          <Inmuebles
            key={inmueble.id}
            id={inmueble.id}
            ciudad={inmueble.ciudad}
            barrio={inmueble.barrio}
            area={inmueble.area}
            habitaciones={inmueble.habitaciones}
            banos={inmueble.banos}
            precio={inmueble.precio}
            photo={inmueble.photos[0]}
            tipoInmueble={inmueble.tipoInmueble}
          />
        ))}
      </Carousel>
    </>
  );
}
