import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ModalTerms from "./ModalTerms";
//importamos auth de firebaseconfig.js para registrar ususarios

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const classes = useStyles();

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  //states para manejar los errores de firebase que son 2, email invalido y pass < 6
  const [msgEmailError, setMsgEmailError] = useState({
    active: false,
    msg: "",
  });
  const [msgPassError, setMsgPassError] = useState({ active: false, msg: "" });

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleInputPass = (e) => {
    setPass(e.target.value);
  };

  const iniciarSesion = () => {
    console.log("hola");
    if (!emailRegex.test(email)) {
      setMsgEmailError({ active: true, msg: "Incorrect Email" });
    } else {
      setMsgEmailError({ active: false, msg: "" });
    }
    if (pass.length < 4) {
      setMsgPassError({ active: true, msg: "Contrasena incorrecta" });
    } else {
      setMsgPassError({ active: false, msg: "" });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={iniciarSesion}>
          <TextField
            error={msgEmailError.active}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputEmail}
            helperText={msgEmailError.msg}
          />
          <TextField
            error={msgPassError.active}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInputPass}
            helperText={msgPassError.msg}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={<ModalTerms />}
          />
        </form>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={iniciarSesion}
        >
          Iniciar sesion
        </Button>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
