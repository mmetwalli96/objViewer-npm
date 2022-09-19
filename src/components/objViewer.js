import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import * as THREE from "three";
import OrbitControlsModule from "three-orbit-controls";
import { OBJLoader } from "three-addons";
import { ScaleLoader } from "react-spinners";

const OrbitControls = OrbitControlsModule(THREE);

export default function OBJViewer(props) {
  const {
    url,
    file,
    width,
    height,
    modelColor,
    backgroundColor,
    orbitControls,
    onSceneRendered,
    sceneClassName,
  } = props;
  return {
      
  };
}

OBJViewer.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  file: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  modelColor: PropTypes.string,
  sceneClassName: PropTypes.string,
  onSceneRendered: PropTypes.func,
};
