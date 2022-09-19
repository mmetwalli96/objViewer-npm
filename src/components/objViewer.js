import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import * as THREE from "three";
import OrbitControlsModule from "three-orbit-controls";
import { OBJLoader } from "three-addons";
import { ScaleLoader } from "react-spinners";

const OrbitControls = OrbitControlsModule(THREE);

function OBJViewer(props) {
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
    className,
  } = props;

  let camera, scene, renderer, controls;
  let xDims, yDims, zDims;

  camera = new THREE.PerspectiveCamera(30, width / height, 1, 10000);
  scene = new THREE.Scene();

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.x = 0;
  directionalLight.position.y = 1;
  directionalLight.position.z = 0;
  directionalLight.position.normalize();
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x404040)

  scene.add(ambientLight);
  scene.add(camera);

  return (
    <div
      className={className}
      style={{
        width: width,
        height: height,
        backgroundColor: backgroundColor,
      }}
    >
      <text>Hello World</text>
    </div>
  );


};

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

OBJViewer.defaultProps = {
  backgroundColor: '#EAEAEA',
  modelColor: '#B92C2C',
  height: 400,
  width: 400,
  orbitControls: true,
  sceneClassName: '',
};

export default OBJViewer;