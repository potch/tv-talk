var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  50
);
camera.position.z = 2;

var renderer = new THREE.WebGLRenderer( {antialias: true} );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x888888, 1);
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var materials = [
  new THREE.MeshLambertMaterial( {emissive: 0Xff0000} ),
  new THREE.MeshLambertMaterial( {emissive: 0X00ff00} ),
  new THREE.MeshLambertMaterial( {emissive: 0X0000ff} ),
  new THREE.MeshLambertMaterial( {emissive: 0Xff00ff} ),
  new THREE.MeshLambertMaterial( {emissive: 0Xffff00} ),
  new THREE.MeshLambertMaterial( {emissive: 0X00ffff} ),
];

var material = new THREE.MeshFaceMaterial( materials );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var t = 0;
function render() {
  var time = Date.now();
  var dt = time - t;
  t = time;
  requestAnimationFrame( render );
  cube.rotation.x += dt * 0.0005;
  cube.rotation.y += dt * 0.002;
  renderer.render( scene, camera );
}

render();
