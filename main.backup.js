import * as THREE from 'three';
import { OrbitControls } from './orbitControls.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3399ff);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Cube
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.5 });
// const cube = new THREE.Mesh(geometry, material);
// cube.castShadow = true;
// cube.position.set(0, 1, 0);
// scene.add(cube)

// Edificio de 3 pisos

// Piso 1 con 2 paredes y un techo

// Pared izquierda con 2 ventanas
const paredIzquierda1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 5, 11),
  new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5 })
);
paredIzquierda1.position.set(-5, 2, 0);
scene.add(paredIzquierda1);

const paredDerecha1 = new THREE.Mesh(
  new THREE.BoxGeometry(11, 5, 1),
  new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5 })
);
paredDerecha1.position.set(0, 2, -5);
scene.add(paredDerecha1);

const techo1 = new THREE.Mesh(
  new THREE.BoxGeometry(12, 1, 12),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
techo1.position.set(0, 5, 0);
scene.add(techo1);

// Hemisferio de luz piso 1
const hemisphereLight1Piso1 = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
hemisphereLight1Piso1.position.set(2, 1, 1);
scene.add( hemisphereLight1Piso1 );
// const hemisphereLight1Piso1Helper = new THREE.HemisphereLightHelper( hemisphereLight1Piso1, 5 );
// scene.add( hemisphereLight1Piso1Helper );

// Luz punto piso 1
const pointLight1Piso1 = new THREE.PointLight(0xffffff, 5, 5, 0);
pointLight1Piso1.position.set(2, 0.5, -5);
scene.add(pointLight1Piso1);
// const pointLight1Piso1Helper = new THREE.PointLightHelper( pointLight1Piso1, 5 );
// scene.add( pointLight1Piso1Helper );


// Piso 2 con 2 paredes y un techo

// Pared izquierda con 2 ventanas
const paredIzquierda2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 5, 11),
  new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5 })
);
paredIzquierda2.position.set(5, 8, 0);
scene.add(paredIzquierda2);

const paredDerecha2 = new THREE.Mesh(
  new THREE.BoxGeometry(11, 5, 1),
  new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5 })
);
paredDerecha2.position.set(0, 8, 5);
scene.add(paredDerecha2);

const techo2 = new THREE.Mesh(
  new THREE.BoxGeometry(12, 1, 12),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
techo2.position.set(0, 11, 0);
scene.add(techo2);

// Hemisferio de luz piso 2
const hemisphereLight1Piso2 = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
hemisphereLight1Piso2.position.set(-2, 5, -1);
scene.add( hemisphereLight1Piso2 );
// const hemisphereLight1Piso2Helper = new THREE.HemisphereLightHelper( hemisphereLight1Piso2, 5 );
// scene.add( hemisphereLight1Piso2Helper );

// Luz punto piso 2
const pointLight1Piso2 = new THREE.PointLight(0xffffff, 5, 5, 0);
pointLight1Piso2.position.set(-2, 6, 5);
scene.add(pointLight1Piso2);
// const pointLight1Piso2Helper = new THREE.PointLightHelper( pointLight1Piso2, 5 );
// scene.add( pointLight1Piso2Helper );


// Plane
const planeGeometry = new THREE.PlaneGeometry(20, 20, 12, 12);
const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x33bb33 });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.receiveShadow = true;
plane.position.set(0, 0, 0);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Grid
// const grid = new THREE.GridHelper(10, 10);
// scene.add(grid);

// Camera
camera.position.z = 20;
camera.position.y = 20;
camera.position.x = 0;
// camera.rotation.x = -Math.PI / 2;

// OrbitControls
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

function animate() {
  requestAnimationFrame(animate);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
