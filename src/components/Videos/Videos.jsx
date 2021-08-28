//yarn add react-video-js-player
import React from "react";
import VideoPlayer from "react-video-js-player";
import inmueble1 from "./inmueble1.mp4";
import { makeStyles } from "@material-ui/core";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles((theme) => ({
  media: {
    width: "100vw",
    height: "40%",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function Videos() {
  const classes = useStyles();
  const poster = "https://i.ibb.co/w7vRWRT/youtube-profile-image.png";

  const width =
    window.innerWidth < 600
      ? window.innerWidth
      : window.innerWidth < 900
      ? window.innerWidth * 0.8
      : window.innerWidth * 0.7;

  return (
    <div className={classes.media}>
      <VideoPlayer src={inmueble1} poster={poster} width={width} />
    </div>
  );
}
