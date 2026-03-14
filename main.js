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
// const material = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5, metalness: 0.5 });
// const cube = new THREE.Mesh(geometry, material);
// cube.castShadow = true;
// cube.position.set(0, 1, 0);
// scene.add(cube)

// Edificio de 3 pisos

// Piso 1 con 2 paredes y un techo

// Pared izquierda con 2 ventanas
const paredIzquierda1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 5, 7),
  new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5 })
);
paredIzquierda1.position.set(-3, 2.5, 0);
scene.add(paredIzquierda1);

const paredDerecha1 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 1),
  new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5 })
);
paredDerecha1.position.set(0, 2.5, -3);
scene.add(paredDerecha1);

const techo1 = new THREE.Mesh(
  new THREE.BoxGeometry(7.2, 0.5, 7.2),
  new THREE.MeshStandardMaterial({ color: 0xffccbb, roughness: 0.5 })
);
techo1.position.set(0, 5.25, 0);
scene.add(techo1);

// Ventanas piso 1 (orientadas en eje X, mirando al Sur)

// Ventana exterior 1 piso 1
// Top
const ventanaExteriorX1TopPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1TopPiso1.position.set(1.5, 4.35, -3.5);
scene.add(ventanaExteriorX1TopPiso1);
// Horizontal middle
const ventanaExteriorX1HorizontalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1HorizontalPiso1.position.set(1.5, 3.2, -3.5);
scene.add(ventanaExteriorX1HorizontalPiso1);
// Bottom
const ventanaExteriorX1BottomPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1BottomPiso1.position.set(1.5, 2.1, -3.5);
scene.add(ventanaExteriorX1BottomPiso1);
// Balcon
const ventanaExteriorX1BalconPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 0.3, 0.4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1BalconPiso1.position.set(1.5, 1.85, -3.5);
scene.add(ventanaExteriorX1BalconPiso1);
// Left
const ventanaExteriorX1LeftPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1LeftPiso1.position.set(2.4, 3.2, -3.5);
scene.add(ventanaExteriorX1LeftPiso1);
// Vertical middle
const ventanaExteriorX1VerticalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1VerticalPiso1.position.set(1.5, 3.2, -3.5);
scene.add(ventanaExteriorX1VerticalPiso1);
// Right
const ventanaExteriorX1RightPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1RightPiso1.position.set(0.6, 3.2, -3.5);
scene.add(ventanaExteriorX1RightPiso1);
// Vidrio exterior 1 ventana 1 piso 1
const vidrio1VentanaExteriorX1Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorX1Piso1.position.set(2, 3.2, -3.5);
scene.add(vidrio1VentanaExteriorX1Piso1);
// Vidrio exterior 2 ventana 1 piso 1
const vidrio2VentanaExteriorX1Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorX1Piso1.position.set(1, 3.2, -3.5);
scene.add(vidrio2VentanaExteriorX1Piso1);

// Ventana exterior 2 piso 1
// Top
const ventanaExteriorX2TopPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2TopPiso1.position.set(-1.5, 4.35, -3.5);
scene.add(ventanaExteriorX2TopPiso1);
// Horizontal middle
const ventanaExteriorX2HorizontalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2HorizontalPiso1.position.set(-1.5, 3.2, -3.5);
scene.add(ventanaExteriorX2HorizontalPiso1);
// Bottom
const ventanaExteriorX2BottomPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2BottomPiso1.position.set(-1.5, 2.1, -3.5);
scene.add(ventanaExteriorX2BottomPiso1);
// Balcon
const ventanaExteriorX2BalconPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 0.3, 0.4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2BalconPiso1.position.set(-1.5, 1.85, -3.5);
scene.add(ventanaExteriorX2BalconPiso1);
// Left
const ventanaExteriorX2LeftPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2LeftPiso1.position.set(-2.4, 3.2, -3.5);
scene.add(ventanaExteriorX2LeftPiso1);
// Vertical middle
const ventanaExteriorX2VerticalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2VerticalPiso1.position.set(-1.5, 3.2, -3.5);
scene.add(ventanaExteriorX2VerticalPiso1);
// Right
const ventanaExteriorX2RightPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2RightPiso1.position.set(-0.6, 3.2, -3.5);
scene.add(ventanaExteriorX2RightPiso1);
// Vidrio exterior 1 ventana 1 piso 1
const vidrio1VentanaExteriorX2Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorX2Piso1.position.set(-2, 3.2, -3.5);
scene.add(vidrio1VentanaExteriorX2Piso1);
// Vidrio exterior 2 ventana 1 piso 1
const vidrio2VentanaExteriorX2Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorX2Piso1.position.set(-1, 3.2, -3.5);
scene.add(vidrio2VentanaExteriorX2Piso1);

// Ventanas piso 1 orientadas en eje Z (mirando al Este)

// Ventana exterior 1 piso 1 (eje Z)
// Top
const ventanaExteriorZ1TopPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1TopPiso1.position.set(-3.5, 4.35, 1.5);
scene.add(ventanaExteriorZ1TopPiso1);
// Horizontal middle
const ventanaExteriorZ1HorizontalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1HorizontalPiso1.position.set(-3.5, 3.2, 1.5);
scene.add(ventanaExteriorZ1HorizontalPiso1);
// Bottom
const ventanaExteriorZ1BottomPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1BottomPiso1.position.set(-3.5, 2.1, 1.5);
scene.add(ventanaExteriorZ1BottomPiso1);
// Balcon
const ventanaExteriorZ1BalconPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.3, 2.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1BalconPiso1.position.set(-3.5, 1.85, 1.5);
scene.add(ventanaExteriorZ1BalconPiso1);
// Left (frontal, eje Z negativo)
const ventanaExteriorZ1LeftPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1LeftPiso1.position.set(-3.5, 3.2, 2.4);
scene.add(ventanaExteriorZ1LeftPiso1);
// Vertical middle
const ventanaExteriorZ1VerticalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1VerticalPiso1.position.set(-3.5, 3.2, 1.5);
scene.add(ventanaExteriorZ1VerticalPiso1);
// Right (frontal, eje Z positivo)
const ventanaExteriorZ1RightPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1RightPiso1.position.set(-3.5, 3.2, 0.6);
scene.add(ventanaExteriorZ1RightPiso1);
// Vidrio exterior 1 ventana 1 piso 1 (eje Z)
const vidrio1VentanaExteriorZ1Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorZ1Piso1.position.set(-3.5, 3.2, 2);
scene.add(vidrio1VentanaExteriorZ1Piso1);
// Vidrio exterior 2 ventana 1 piso 1 (eje Z)
const vidrio2VentanaExteriorZ1Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorZ1Piso1.position.set(-3.5, 3.2, 1);
scene.add(vidrio2VentanaExteriorZ1Piso1);

// Ventana exterior 2 piso 1 (eje Z)
// Top
const ventanaExteriorZ2TopPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2TopPiso1.position.set(-3.5, 4.35, -1.5);
scene.add(ventanaExteriorZ2TopPiso1);
// Horizontal middle
const ventanaExteriorZ2HorizontalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2HorizontalPiso1.position.set(-3.5, 3.2, -1.5);
scene.add(ventanaExteriorZ2HorizontalPiso1);
// Bottom
const ventanaExteriorZ2BottomPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2BottomPiso1.position.set(-3.5, 2.1, -1.5);
scene.add(ventanaExteriorZ2BottomPiso1);
// Balcon
const ventanaExteriorZ2BalconPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.3, 2.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2BalconPiso1.position.set(-3.5, 1.85, -1.5);
scene.add(ventanaExteriorZ2BalconPiso1);
// Left (frontal, eje Z negativo)
const ventanaExteriorZ2LeftPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2LeftPiso1.position.set(-3.5, 3.2, -0.6);
scene.add(ventanaExteriorZ2LeftPiso1);
// Vertical middle
const ventanaExteriorZ2VerticalPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2VerticalPiso1.position.set(-3.5, 3.2, -1.5);
scene.add(ventanaExteriorZ2VerticalPiso1);
// Right (frontal, eje Z positivo)
const ventanaExteriorZ2RightPiso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2RightPiso1.position.set(-3.5, 3.2, -2.4);
scene.add(ventanaExteriorZ2RightPiso1);
// Vidrio exterior 1 ventana 2 piso 1 (eje Z)
const vidrio1VentanaExteriorZ2Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorZ2Piso1.position.set(-3.5, 3.2, -1);
scene.add(vidrio1VentanaExteriorZ2Piso1);
// Vidrio exterior 2 ventana 2 piso 1 (eje Z)
const vidrio2VentanaExteriorZ2Piso1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorZ2Piso1.position.set(-3.5, 3.2, -2);
scene.add(vidrio2VentanaExteriorZ2Piso1);

// Ventanas piso 1 (cara Sur y cara Este, Y duplicado)

// Ventana exterior 1 piso 1 (cara Sur, Y + altura pared)
// Top
const ventanaExteriorX1TopPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1TopPiso1Sur.position.set(1.5, 9.35, 3.5);
scene.add(ventanaExteriorX1TopPiso1Sur);
// Horizontal middle
const ventanaExteriorX1HorizontalPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1HorizontalPiso1Sur.position.set(1.5, 8.2, 3.5);
scene.add(ventanaExteriorX1HorizontalPiso1Sur);
// Bottom
const ventanaExteriorX1BottomPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1BottomPiso1Sur.position.set(1.5, 7.1, 3.5);
scene.add(ventanaExteriorX1BottomPiso1Sur);
// Balcon
const ventanaExteriorX1BalconPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 0.3, 0.4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1BalconPiso1Sur.position.set(1.5, 6.85, 3.5);
scene.add(ventanaExteriorX1BalconPiso1Sur);
// Left
const ventanaExteriorX1LeftPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1LeftPiso1Sur.position.set(2.4, 8.2, 3.5);
scene.add(ventanaExteriorX1LeftPiso1Sur);
// Vertical middle
const ventanaExteriorX1VerticalPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1VerticalPiso1Sur.position.set(1.5, 8.2, 3.5);
scene.add(ventanaExteriorX1VerticalPiso1Sur);
// Right
const ventanaExteriorX1RightPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX1RightPiso1Sur.position.set(0.6, 8.2, 3.5);
scene.add(ventanaExteriorX1RightPiso1Sur);
// Vidrio exterior 1 ventana 1 piso 1 (cara Sur)
const vidrio1VentanaExteriorX1Piso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorX1Piso1Sur.position.set(2, 8.2, 3.5);
scene.add(vidrio1VentanaExteriorX1Piso1Sur);
// Vidrio exterior 2 ventana 1 piso 1 (cara Sur)
const vidrio2VentanaExteriorX1Piso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorX1Piso1Sur.position.set(1, 8.2, 3.5);
scene.add(vidrio2VentanaExteriorX1Piso1Sur);

// Ventana exterior 2 piso 1 (cara Sur, Y + altura pared)
// Top
const ventanaExteriorX2TopPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2TopPiso1Sur.position.set(-1.5, 9.35, 3.5);
scene.add(ventanaExteriorX2TopPiso1Sur);
// Horizontal middle
const ventanaExteriorX2HorizontalPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2HorizontalPiso1Sur.position.set(-1.5, 8.2, 3.5);
scene.add(ventanaExteriorX2HorizontalPiso1Sur);
// Bottom
const ventanaExteriorX2BottomPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2, 0.2, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2BottomPiso1Sur.position.set(-1.5, 7.1, 3.5);
scene.add(ventanaExteriorX2BottomPiso1Sur);
// Balcon
const ventanaExteriorX2BalconPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(2.2, 0.3, 0.4),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2BalconPiso1Sur.position.set(-1.5, 6.85, 3.5);
scene.add(ventanaExteriorX2BalconPiso1Sur);
// Left
const ventanaExteriorX2LeftPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2LeftPiso1Sur.position.set(-2.4, 8.2, 3.5);
scene.add(ventanaExteriorX2LeftPiso1Sur);
// Vertical middle
const ventanaExteriorX2VerticalPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2VerticalPiso1Sur.position.set(-1.5, 8.2, 3.5);
scene.add(ventanaExteriorX2VerticalPiso1Sur);
// Right
const ventanaExteriorX2RightPiso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorX2RightPiso1Sur.position.set(-0.6, 8.2, 3.5);
scene.add(ventanaExteriorX2RightPiso1Sur);
// Vidrio exterior 1 ventana 2 piso 1 (cara Sur)
const vidrio1VentanaExteriorX2Piso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorX2Piso1Sur.position.set(-2, 8.2, 3.5);
scene.add(vidrio1VentanaExteriorX2Piso1Sur);
// Vidrio exterior 2 ventana 2 piso 1 (cara Sur)
const vidrio2VentanaExteriorX2Piso1Sur = new THREE.Mesh(
  new THREE.BoxGeometry(0.8, 2.2, 0.05),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorX2Piso1Sur.position.set(-1, 8.2, 3.5);
scene.add(vidrio2VentanaExteriorX2Piso1Sur);

// Ventana exterior 1 piso 1 (cara Este, Y + altura pared)
// Top
const ventanaExteriorZ1TopPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1TopPiso1Este.position.set(3.5, 9.35, 1.5);
scene.add(ventanaExteriorZ1TopPiso1Este);
// Horizontal middle
const ventanaExteriorZ1HorizontalPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1HorizontalPiso1Este.position.set(3.5, 8.2, 1.5);
scene.add(ventanaExteriorZ1HorizontalPiso1Este);
// Bottom
const ventanaExteriorZ1BottomPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1BottomPiso1Este.position.set(3.5, 7.1, 1.5);
scene.add(ventanaExteriorZ1BottomPiso1Este);
// Balcon
const ventanaExteriorZ1BalconPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.3, 2.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1BalconPiso1Este.position.set(3.5, 6.85, 1.5);
scene.add(ventanaExteriorZ1BalconPiso1Este);
// Left (frontal, eje Z negativo)
const ventanaExteriorZ1LeftPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1LeftPiso1Este.position.set(3.5, 8.2, 2.4);
scene.add(ventanaExteriorZ1LeftPiso1Este);
// Vertical middle
const ventanaExteriorZ1VerticalPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1VerticalPiso1Este.position.set(3.5, 8.2, 1.5);
scene.add(ventanaExteriorZ1VerticalPiso1Este);
// Right (frontal, eje Z positivo)
const ventanaExteriorZ1RightPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ1RightPiso1Este.position.set(3.5, 8.2, 0.6);
scene.add(ventanaExteriorZ1RightPiso1Este);
// Vidrio exterior 1 ventana 1 piso 1 (cara Este)
const vidrio1VentanaExteriorZ1Piso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorZ1Piso1Este.position.set(3.5, 8.2, 2);
scene.add(vidrio1VentanaExteriorZ1Piso1Este);
// Vidrio exterior 2 ventana 1 piso 1 (cara Este)
const vidrio2VentanaExteriorZ1Piso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorZ1Piso1Este.position.set(3.5, 8.2, 1);
scene.add(vidrio2VentanaExteriorZ1Piso1Este);

// Ventana exterior 2 piso 1 (cara Este, Y + altura pared)
// Top
const ventanaExteriorZ2TopPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2TopPiso1Este.position.set(3.5, 9.35, -1.5);
scene.add(ventanaExteriorZ2TopPiso1Este);
// Horizontal middle
const ventanaExteriorZ2HorizontalPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2HorizontalPiso1Este.position.set(3.5, 8.2, -1.5);
scene.add(ventanaExteriorZ2HorizontalPiso1Este);
// Bottom
const ventanaExteriorZ2BottomPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 0.2, 2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2BottomPiso1Este.position.set(3.5, 7.1, -1.5);
scene.add(ventanaExteriorZ2BottomPiso1Este);
// Balcon
const ventanaExteriorZ2BalconPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.3, 2.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2BalconPiso1Este.position.set(3.5, 6.85, -1.5);
scene.add(ventanaExteriorZ2BalconPiso1Este);
// Left (frontal, eje Z negativo)
const ventanaExteriorZ2LeftPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2LeftPiso1Este.position.set(3.5, 8.2, -0.6);
scene.add(ventanaExteriorZ2LeftPiso1Este);
// Vertical middle
const ventanaExteriorZ2VerticalPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2VerticalPiso1Este.position.set(3.5, 8.2, -1.5);
scene.add(ventanaExteriorZ2VerticalPiso1Este);
// Right (frontal, eje Z positivo)
const ventanaExteriorZ2RightPiso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.2, 2.3, 0.2),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 })
);
ventanaExteriorZ2RightPiso1Este.position.set(3.5, 8.2, -2.4);
scene.add(ventanaExteriorZ2RightPiso1Este);
// Vidrio exterior 1 ventana 2 piso 1 (cara Este)
const vidrio1VentanaExteriorZ2Piso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio1VentanaExteriorZ2Piso1Este.position.set(3.5, 8.2, -1);
scene.add(vidrio1VentanaExteriorZ2Piso1Este);
// Vidrio exterior 2 ventana 2 piso 1 (cara Este)
const vidrio2VentanaExteriorZ2Piso1Este = new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 2.2, 0.8),
  new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5 })
);
vidrio2VentanaExteriorZ2Piso1Este.position.set(3.5, 8.2, -2);
scene.add(vidrio2VentanaExteriorZ2Piso1Este);

// Hemisferio de luz piso 1
const hemisphereLight1Piso1 = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
hemisphereLight1Piso1.position.set(2, 1, 1);
scene.add( hemisphereLight1Piso1 );
// const hemisphereLight1Piso1Helper = new THREE.HemisphereLightHelper( hemisphereLight1Piso1, 5 );
// scene.add( hemisphereLight1Piso1Helper );

// Luz punto piso 1
// const pointLight1Piso1 = new THREE.PointLight(0xffffff, 5, 5, 0);
// pointLight1Piso1.position.set(2, 0.5, -5);
// scene.add(pointLight1Piso1);
// const pointLight1Piso1Helper = new THREE.PointLightHelper( pointLight1Piso1, 5 );
// scene.add( pointLight1Piso1Helper );


// Piso 2 con 2 paredes y un techo

// Pared izquierda con 2 ventanas
const paredIzquierda2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 5, 7),
  new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5 })
);
paredIzquierda2.position.set(3, 8, 0);
scene.add(paredIzquierda2);

const paredDerecha2 = new THREE.Mesh(
  new THREE.BoxGeometry(7, 5, 1),
  new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5 })
);
paredDerecha2.position.set(0, 8, 3);
scene.add(paredDerecha2);

const techo2 = new THREE.Mesh(
  new THREE.BoxGeometry(7.2, 0.5, 7.2),
  new THREE.MeshStandardMaterial({ color: 0xffccbb, roughness: 0.5 })
);
techo2.position.set(0, 10.5, 0);
scene.add(techo2);

// Hemisferio de luz piso 2
const hemisphereLight1Piso2 = new THREE.HemisphereLight( 0xffffff, 0x000000, 3 );
hemisphereLight1Piso2.position.set(-2, 5, -1);
scene.add( hemisphereLight1Piso2 );
// const hemisphereLight1Piso2Helper = new THREE.HemisphereLightHelper( hemisphereLight1Piso2, 5 );
// scene.add( hemisphereLight1Piso2Helper );

// Luz punto piso 2
// const pointLight1Piso2 = new THREE.PointLight(0xffffff, 5, 5, 0);
// pointLight1Piso2.position.set(-2, 6, 5);
// scene.add(pointLight1Piso2);
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
camera.position.z = 10;
camera.position.y = 10;
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
