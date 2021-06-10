import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Inicio from "../components/Inicio";
import Inmueble from "../components/Inmueble.jsx";
import BarraNavegacion from "../components/BarraNavegacion";
import GetData from "../components/GetData";
import Login from "../components/Login";
export default function AppRouter() {
  return (
    <Router>
      <BarraNavegacion />
      <Switch>
        <Route exact path="/" component={GetData} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/inmueble/:id" component={Inmueble} />
      </Switch>
    </Router>
  );
}
