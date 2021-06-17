import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Button,
  Card,
  Divider,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",

    display: "flex",
    justifyContent: "center",
  },
  search: {
    width: "95%",
    paddingLeft: 15,
    paddingBottom: 8,
    display: "flex",
    justifyContent: "space-around",
    color: "gray",
    alignItems: "center",
    [theme.breakpoints.down("696")]: {
      display: `block`,
      width: "95%",
    },
  },
  inputSearch: {
    width: "90%",
    marginTop: 10,
  },
  boton: {
    marginTop: 10,
    [theme.breakpoints.up("696")]: {
      marginLeft: 20,
      width: 200,
    },
  },
}));

export default function SearchInmueble() {
  const classes = useStyles();

  return (
    <>
      <form autoComplete="off" className={classes.form}>
        <Card style={{ borderRadius: 10 }}>
          <Box className={classes.search}>
            <TextField
              id="city-search"
              label="Buscar por ubicacion"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              className={classes.inputSearch}
            />
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              light={true}
            />
            <TextField
              id="city-search"
              label="Precio hasta"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoneyOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              className={classes.inputSearch}
              type="number"
            />
            <Divider
              orientation="vertical"
              flexItem
              variant="middle"
              light={true}
            />
            <TextField
              id="city-search"
              label="Habitaciones"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <KingBedOutlinedIcon />
                  </InputAdornment>
                ),
              }}
              className={classes.inputSearch}
              type="number"
            />
            <Button variant="outlined" size="large" className={classes.boton}>
              Buscar
            </Button>
          </Box>
        </Card>
      </form>
    </>
  );
}
