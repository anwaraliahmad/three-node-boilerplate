window.THREE = require('three');
window.OrbitControls = require('three-orbit-controls')(THREE);
window.Stats = require('stats.js');

// The setting up the scene, which contains all objects
let scene = new THREE.Scene();

// Camera with 45 deg FoV and aspect ratio of window's innerWidth/innerHeight, render distance interval [1,5000]
let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);
camera.position.z = 30;

// Setting up orbit controlling of the camera
let controls = new OrbitControls(camera);

//giving the document a WebGL renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// Adding a visualization of the x, y, and z axes
let axisHelper = new THREE.AxisHelper(4);
scene.add(axisHelper);

// Adding DOM element which displays FPS performance between rendered frames
let stats = new Stats();
stats.showPanel(0);
document.body.appendChild(stats.dom);

function render () {
  // Begin recording framerate
  stats.begin();
  // Updating camera controls
  controls.update();
  // Rendering the scene
  renderer.render(scene, camera);

  // Finish recording framerate (now updates the FPS displayed on stats DOM element)
  stats.end();

  // Telling the browser that the function render seeks to reanimate frame
  window.requestAnimationFrame(render);
}

// Initial call of render()
requestAnimationFrame(render);
