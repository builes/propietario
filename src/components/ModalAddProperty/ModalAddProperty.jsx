import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { store } from "../../firebase/firebaseFirestore";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Estados de los select
  const [mascotas, setMascotas] = React.useState("");
  const [parqueadero, setParqueadero] = React.useState("");
  const [tipoInmueble, settipoInmueble] = React.useState("");

  //Estados para asignar a cada variable lo que se haya escrito

  const [precio, setPrecio] = useState("");
  const [habitaciones, setHabitaciones] = useState("");
  const [baños, setBaños] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [barrio, setBarrio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [estrato, setEstrato] = useState("");
  const [area, setArea] = useState("");
  const [piso, setPiso] = useState("");
  const [nombreUnidad, setnomberUnidad] = useState("");
  const [fotos, setFotos] = useState([]);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  //estados de cada input para verificar que si se haya escrito algo
  const [errorId, setErrorId] = useState({
    active: false,
    msg: "",
  });

  const [errorPrecio, setErrorPrecio] = useState({
    active: false,
    msg: "",
  });

  const [errorHabitaciones, setErrorHabitaciones] = useState({
    active: false,
    msg: "",
  });

  const [errorBaños, setErrorBaños] = useState({
    active: false,
    msg: "",
  });

  const [errorCiudad, setErrorCiudad] = useState({
    active: false,
    msg: "",
  });

  const [errorBarrio, setErrorBarrio] = useState({
    active: false,
    msg: "",
  });

  const [errorDireccion, setErrorDireccion] = useState({
    active: false,
    msg: "",
  });

  const [errorNombre, setErrorNombre] = useState({
    active: false,
    msg: "",
  });

  const [errorEstrato, setErrorEstrato] = useState({
    active: false,
    msg: "",
  });

  const [errorArea, setErrorArea] = useState({
    active: false,
    msg: "",
  });

  const [errorPiso, setErrorPiso] = useState({
    active: false,
    msg: "",
  });

  const [errorNombreUnidad, setErrorNombreUnidad] = useState({
    active: false,
    msg: "",
  });

  const [errorMascotas, setErrorMascotas] = useState({
    active: false,
    msg: "",
  });

  const [errorParqueadero, setErrorParqueadero] = useState({
    active: false,
    msg: "",
  });

  const [errorInmueble, setErrorInmueble] = useState({
    active: false,
    msg: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeMascotas = (e) => {
    setMascotas(e.target.value);
  };

  const handleChangeParqueadero = (e) => {
    setParqueadero(e.target.value);
  };

  const handleChangeTipoInmueble = (e) => {
    settipoInmueble(e.target.value);
  };

  const handlePropiedad = async (e) => {
    e.preventDefault();
    // if (id.trim().length < 1) {
    //   setErrorId({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorId({ active: false, msg: "" });
    // }
    // console.log(id);
    // if (precio.trim().length < 1) {
    //   setErrorPrecio({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorPrecio({ active: false, msg: "" });
    // }
    // if (habitaciones.trim().length < 1) {
    //   setErrorHabitaciones({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorHabitaciones({ active: false, msg: "" });
    // }
    // if (baños.trim().length < 1) {
    //   setErrorBaños({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorBaños({ active: false, msg: "" });
    // }
    // if (ciudad.trim().length < 1) {
    //   setErrorCiudad({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorCiudad({ active: false, msg: "" });
    // }
    // if (barrio.trim().length < 1) {
    //   setErrorBarrio({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorBarrio({ active: false, msg: "" });
    // }
    // if (direccion.trim().length < 1) {
    //   setErrorDireccion({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorDireccion({ active: false, msg: "" });
    // }
    // if (estrato.trim().length < 1) {
    //   setErrorEstrato({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorEstrato({ active: false, msg: "" });
    // }
    // if (area.trim().length < 1) {
    //   setErrorArea({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorArea({ active: false, msg: "" });
    // }
    // if (piso.trim().length < 1) {
    //   setErrorPiso({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorPiso({ active: false, msg: "" });
    // }
    // if (nombreUnidad.trim().length < 1) {
    //   setErrorNombreUnidad({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorNombreUnidad({ active: false, msg: "" });
    // }
    // if (mascotas.trim().length < 1) {
    //   setErrorMascotas({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorMascotas({ active: false, msg: "" });
    // }
    // if (parqueadero.trim().length < 1) {
    //   setErrorParqueadero({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorParqueadero({ active: false, msg: "" });
    // }
    // if (tipoInmueble.trim().length < 1) {
    //   setErrorInmueble({ active: true, msg: "Debes de ingresar un id" });
    // } else {
    //   setErrorInmueble({ active: false, msg: "" });
    // }
    const propiedad = {
      precio,
      habitaciones,
      baños,
      ciudad,
      barrio,
      direccion,
      estrato,
      area,
      piso,
      nombreUnidad,
      mascotas,
      parqueadero,
      tipoInmueble,
      photos: fotos,
    };
    try {
      //Asi creamos una nueva collecion en la BD si no existe y le agregamos un elemento
      const data = await await await store
        .collection("propiedades")
        .add(propiedad);
      //Asi hacemos que cada que ingresemos un usuario nuevo se muetsre en la lista
      alert("Inmueble agregado ");
    } catch (error) {
      console.log(error);
    }
    console.log(fotos, "hola");
  };

  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="primary"
        size="large"
      >
        Agregar propiedad
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container>
            <div className={classes.paper} style={{ borderRadius: 20 }}>
              <form
                className={classes.root}
                noValidate
                autoComplete="off"
                onSubmit={handlePropiedad}
              >
                <div>
                  <TextField
                    error={errorPrecio.active}
                    helperText={errorPrecio.msg}
                    label="Precio"
                    style={{ width: "30%" }}
                    type="number"
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                  <TextField
                    error={errorHabitaciones.active}
                    helperText={errorHabitaciones.msg}
                    label="Habitaciones"
                    style={{ width: "30%" }}
                    onChange={(e) => setHabitaciones(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    error={errorBaños.active}
                    helperText={errorBaños.msg}
                    label="Baños"
                    style={{ width: "30%" }}
                    type="number"
                    onChange={(e) => setBaños(e.target.value)}
                  />
                  <TextField
                    error={errorCiudad.active}
                    helperText={errorCiudad.msg}
                    label="Ciudad"
                    style={{ width: "30%" }}
                    onChange={(e) => setCiudad(e.target.value)}
                  />
                  <TextField
                    error={errorBarrio.active}
                    helperText={errorBarrio.msg}
                    label="Barrio"
                    style={{ width: "30%" }}
                    onChange={(e) => setBarrio(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    error={errorDireccion.active}
                    helperText={errorDireccion.msg}
                    label="Direccion"
                    style={{ width: "30%" }}
                    onChange={(e) => setDireccion(e.target.value)}
                  />
                  <TextField
                    error={errorDireccion.active}
                    helperText={errorDireccion.msg}
                    label="Estrato"
                    style={{ width: "30%" }}
                    type="number"
                    onChange={(e) => setEstrato(e.target.value)}
                  />
                  <TextField
                    error={errorDireccion.active}
                    helperText={errorDireccion.msg}
                    label="Area"
                    style={{ width: "30%" }}
                    type="number"
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>
                <div>
                  <TextField
                    error={errorDireccion.active}
                    helperText={errorDireccion.msg}
                    label="piso"
                    style={{ width: "30%" }}
                    onChange={(e) => setPiso(e.target.value)}
                  />
                  <TextField
                    error={errorDireccion.active}
                    helperText={errorDireccion.msg}
                    label="Nombre unidad"
                    style={{ width: "62%" }}
                    onChange={(e) => setnomberUnidad(e.target.value)}
                  />
                </div>
                <div>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "30%" }}
                    error={errorMascotas.active}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Se permiten mascotas?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={mascotas}
                      onChange={handleChangeMascotas}
                    >
                      <MenuItem value={"Si se permiten mascotas"}>
                        Si se permiten mascotas
                      </MenuItem>
                      <MenuItem value={"No se permiten mascotas"}>
                        No se permiten mascotas
                      </MenuItem>
                    </Select>
                    <FormHelperText>{errorMascotas.msg}</FormHelperText>
                  </FormControl>

                  <FormControl
                    className={classes.formControl}
                    style={{ width: "30%" }}
                    error={errorParqueadero.active}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Tiene parqueadero?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={parqueadero}
                      onChange={handleChangeParqueadero}
                    >
                      <MenuItem value={"Con Parqueadero"}>
                        Con Parqueadero
                      </MenuItem>
                      <MenuItem value={"Sin parqueadero"}>
                        Sin parqueadero
                      </MenuItem>
                    </Select>
                    <FormHelperText>{errorParqueadero.msg}</FormHelperText>
                  </FormControl>
                  <FormControl
                    className={classes.formControl}
                    style={{ width: "30%" }}
                    error={errorInmueble.active}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Tipo de inmueble?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      value={tipoInmueble}
                      onChange={handleChangeTipoInmueble}
                    >
                      <MenuItem value={"Casa"}>Casa</MenuItem>
                      <MenuItem value={"Apartamento"}>Apartamento</MenuItem>
                      <MenuItem value={"Apartaestudio"}>Apartaestudio</MenuItem>
                      <MenuItem value={"Local"}>Local</MenuItem>
                      <MenuItem value={"Bodega"}>Bodega</MenuItem>
                    </Select>
                    <FormHelperText>{errorInmueble.msg}</FormHelperText>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    error={errorBaños.active}
                    helperText={"Agrega las fotos del inmueble"}
                    style={{ width: "26%" }}
                    type="file"
                    name="asdasd"
                  />
                </div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">
                    Desea publicar la propiedad ya
                  </FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Si"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
                <TextareaAutosize
                  aria-label="minimum height"
                  rowsMin={4}
                  placeholder="Agrega una descripcion de la propiedad"
                  style={{ width: "94%", marginBottom: 10 }}
                />
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="primary"
                >
                  Guardar Propiedad
                </Button>
              </form>
            </div>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}
