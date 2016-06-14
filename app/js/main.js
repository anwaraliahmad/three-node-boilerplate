window.THREE = require('three');
window.OrbitControls = require('three-orbit-controls')(THREE);
window.DAT = require('dat-gui');

let scene = new THREE.Scene();
// Camera with 45 deg FoV and aspect ratio of window's innerWidth/innerHeight, render distance interval [1,5000]
let camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);
camera.position.z = 30;
//giving the document a WebGL renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );
renderer.setClearColor(0xffffff, .5);

function render () {

}



requestAnimationFrame(render);
