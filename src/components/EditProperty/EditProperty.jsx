import { Container, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "react-bootstrap";
import ModalAddProperty from "../ModalAddProperty/ModalAddProperty";

export default function EdittProperty() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <ModalAddProperty />
        </Grid>
      </Grid>
    </Container>
  );
}
