import React, { Component } from "react";

import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  stylediv = {
    width: "100%",
    height: "40vh",
    position: "relative",
  };

  render() {
    return (
      <div style={this.stylediv}>
        <Map
          style={{
            width: "80%",
            height: "100%",
            position: "relative",
            margin: "auto",
          }}
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: 6.209041616777739,
            lng: -75.56869632846275,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCw6zYYIUI0h-sJjp75skeZ7HblVGMCFdQ",
})(MapContainer);
