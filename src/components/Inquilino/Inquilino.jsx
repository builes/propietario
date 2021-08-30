import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import mujer from "../Inquilino/mujer.jpg";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  general: {
    display: "flex",
    margin: 30,
    height: "80vh",
    marginLeft: 250,
    marginRight: 250,
    marginTop: 100,
    background: "#eceff1",
    borderRadius: 20,
    padding: 30,
  },
  general1: {
    display: "flex",
    flexWrap: "wrap",
  },
  stars: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {},
  },
});

export default function Inquilino() {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);

  return (
    <div className={classes.general}>
      <div>
        <img
          src={mujer}
          alt="mujer"
          width="100%"
          height="70%"
          style={{ borderRadius: "100%", padding: 30, marginTop: 60 }}
        />
      </div>
      <div
        className={classes.general1}
        style={{ padding: 30, marginTop: 100, marginLeft: 50 }}
      >
        <div style={{ width: "50%" }}>
          <h6>Nombres</h6>
          <p>Luisa Maria</p>
        </div>
        <div style={{ width: "50%" }}>
          <h6>Apellidos</h6>
          <p>Rios Zapata</p>
        </div>
        <div style={{ width: "50%", marginTop: -25 }}>
          <h6>Telefono</h6>
          <p>3205689876</p>
        </div>
        <div style={{ width: "50%", marginTop: -25 }}>
          <h6>Cedula</h6>
          <p>1.056.894.534</p>
        </div>
        <div style={{ width: "50%", marginTop: -40 }}>
          <h6>Correo</h6>
          <p>luisa@gmail.com</p>
        </div>
        <div style={{ width: "50%", marginTop: -40 }}>
          <h6>Calificacion</h6>
          <div
            className={classes.stars}
            style={{
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
        </div>
        <div>
          <Button variant="contained" color="primary">
            Enviar mensaje
          </Button>
        </div>
      </div>
    </div>
  );
}
