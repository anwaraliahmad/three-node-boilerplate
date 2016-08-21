window.THREE = require('three');
window.OrbitControls = require('three-orbit-controls')(THREE);
window.stats = require('stats.js');

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

function render () {
  controls.update();
  // Rendering the scene
  renderer.render(scene, camera);
  // Telling the browser that the function render seeks to reanimate frame
  window.requestAnimationFrame(render);
}

// Initial call of render()
requestAnimationFrame(render);
