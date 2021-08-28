import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalAddProperty from "../ModalAddProperty/ModalAddProperty";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { store } from "../../firebase/firebaseFirestore";
import { Link } from "react-router-dom";

export default function EdittProperty() {
  const [inmuebles, setInmuebles] = useState([]);

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

  const deleteInmueble = async (id) => {
    try {
      //asi eliminamos un elemento de la coleccion por id
      await store.collection("propiedades").doc(id).delete();
      //Asi hacemos que cada que ingresemos un usuario nuevo se muetsre en la lista
      const { docs } = await store.collection("propiedades").get();
      const newArray = docs.map((item) => ({ id: item.id, ...item.data() }));
      console.log(newArray);
      setInmuebles(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  const updateInmueble = async (id) => {
    try {
      //Asi obtenemos la informacion sobre el usuario que le demos update
      const data = await (
        await store.collection("propiedades").doc(id).get()
      ).data();
      //await store.collection('agenda').doc(id).set(registro actualizado)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const style = {
    marginTop: 20,
    border: "solid",
    borderRadius: 20,
  };

  return (
    <Container>
      <Grid
        container
        style={{
          marginTop: 20,
          border: "solid 1px",
          borderRadius: 20,
          padding: 10,
        }}
      >
        <Grid item xs={4}>
          <div style={{ marginBottom: 20 }}>
            <ModalAddProperty />
          </div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ marginBottom: 20 }}>
            <Button variant="contained" size="large">
              <Link to="pago" style={{ textDecoration: "none" }}>
                Convertirse en premium
              </Link>
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" style={{ marginBottom: 20 }}>
            Id inmueble
            {inmuebles.length !== 0
              ? inmuebles.map((inmueble) => (
                  <li key={inmueble.id}>
                    {inmueble.id}
                    <Box display="flex" justifyContent="flex-end">
                      <Button
                        variant="contained"
                        color="suscess"
                        style={{
                          backgroundColor: "#81c784",
                          marginRight: "15px",
                        }}
                      >
                        <Link
                          to="inquilino"
                          style={{ color: "white", textDecoration: "none" }}
                        >
                          Arrendada
                        </Link>
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={(id) => {
                          deleteInmueble(inmueble.id);
                        }}
                        style={{ marginRight: "15px" }}
                      >
                        Borrar
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={(id) => {
                          updateInmueble(inmueble.id);
                        }}
                      >
                        Actualizar
                      </Button>
                    </Box>
                    <Divider />
                  </li>
                ))
              : "No hay propiedades"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
