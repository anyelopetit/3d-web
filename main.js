import * as THREE from 'three';
import { OrbitControls } from './orbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x3399ff);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace; // Asegura colores correctos en Three.js moderno
document.body.appendChild(renderer.domElement);

/**
 * Crea una ventana completa con marcos, vidrios y balcón opcional.
 */
function crearVentanaBase(x, y, z, orientacion = 'X', color = 0xffffff, esExterior = true) {
  const group = new THREE.Group();
  const frameMat = new THREE.MeshStandardMaterial({ color: color, roughness: 0.5 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x66bbff, roughness: 0.5, transparent: true }); // , opacity: 0.6

  let frameGeomHoriz, frameGeomVert, glassGeom, balconGeom;
  if (orientacion === 'X') {
    frameGeomHoriz = new THREE.BoxGeometry(2, 0.2, 0.2);
    frameGeomVert = new THREE.BoxGeometry(0.2, 2.3, 0.2);
    glassGeom = new THREE.BoxGeometry(0.8, 2.2, 0.05);
    balconGeom = new THREE.BoxGeometry(2.2, 0.3, 0.4);
  } else {
    frameGeomHoriz = new THREE.BoxGeometry(0.2, 0.2, 2);
    frameGeomVert = new THREE.BoxGeometry(0.2, 2.3, 0.2);
    glassGeom = new THREE.BoxGeometry(0.05, 2.2, 0.8);
    balconGeom = new THREE.BoxGeometry(0.4, 0.3, 2.2);
  }

  // Partes del marco
  const parts = [
    { g: frameGeomHoriz, p: [0, 1.15, 0] },     // Superior
    { g: frameGeomHoriz, p: [0, 0, 0] },        // Medio Horizontal
    { g: frameGeomHoriz, p: [0, -1.1, 0] },     // Inferior
    { g: frameGeomVert,  p: orientacion === 'X' ? [0.9, 0, 0] : [0, 0, 0.9] }, // Lado A
    { g: frameGeomVert,  p: [0, 0, 0] },        // Medio Vertical
    { g: frameGeomVert,  p: orientacion === 'X' ? [-0.9, 0, 0] : [0, 0, -0.9] }, // Lado B
  ];

  parts.forEach(part => {
    const mesh = new THREE.Mesh(part.g, frameMat);
    mesh.position.set(...part.p);
    group.add(mesh);
  });

  // Vidrios
  const g1 = new THREE.Mesh(glassGeom, glassMat);
  const g2 = new THREE.Mesh(glassGeom, glassMat);
  if (orientacion === 'X') {
    g1.position.set(0.5, 0, 0); g2.position.set(-0.5, 0, 0);
  } else {
    g1.position.set(0, 0, 0.5); g2.position.set(0, 0, -0.5);
  }
  group.add(g1, g2);

  // Balcón (solo para exteriores)
  if (esExterior) {
    const balcon = new THREE.Mesh(balconGeom, frameMat);
    balcon.position.set(0, -1.35, 0);
    group.add(balcon);
  }

  group.position.set(x, y, z);
  return group;
}

// Funciones exportables como solicitó el usuario
export function ventanaExterior(x, y, z, orientacion = 'X') {
  return crearVentanaBase(x, y, z, orientacion, 0xffffff, true);
}

export function ventanaInterior(x, y, z, orientacion = 'X') {
  return crearVentanaBase(x, y, z, orientacion, 0xdd9966, false);
}

/**
 * Crea un piso completo (paredes, techo, luz y ventanas)
 */
export function crearPiso(n, yCenter, yCeiling) {
  const isImpar = n % 2 !== 0;
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.5 });

  // Paredes (L invertida que alterna según el piso)
  const pIzq = new THREE.Mesh(new THREE.BoxGeometry(1, 5, 7), wallMat);
  pIzq.position.set(isImpar ? -3 : 3, yCenter, 0);
  scene.add(pIzq);

  const pDer = new THREE.Mesh(new THREE.BoxGeometry(7, 5, 1), wallMat);
  pDer.position.set(0, yCenter, isImpar ? -3 : 3);
  scene.add(pDer);

  // Techo
  const techo = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 7.2), new THREE.MeshStandardMaterial({ color: 0xffccbb, roughness: 0.5 }));
  techo.position.set(0, yCeiling, 0);
  scene.add(techo);

  // Luz de piso
  const hLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
  hLight.position.set(isImpar ? 2 : -2, yCenter + (isImpar ? -1.5 : -3), isImpar ? 1 : -1);
  scene.add(hLight);

  // Ventanas
  const windowY = yCenter + 0.7; // Altura relativa

  // Pared 1 (Eje Z)
  const w1X = isImpar ? -3.5 : 3.5;
  const w1XInt = isImpar ? -2.4 : 2.4;
  scene.add(ventanaExterior(w1X, windowY, 1.5, 'Z'));
  scene.add(ventanaInterior(w1XInt, windowY, 1.5, 'Z'));
  scene.add(ventanaExterior(w1X, windowY, -1.5, 'Z'));
  scene.add(ventanaInterior(w1XInt, windowY, -1.5, 'Z'));

  // Pared 2 (Eje X)
  const w2Z = isImpar ? -3.5 : 3.5;
  const w2ZInt = isImpar ? -2.4 : 2.4;
  scene.add(ventanaExterior(1.5, windowY, w2Z, 'X'));
  scene.add(ventanaInterior(1.5, windowY, w2ZInt, 'X'));
  scene.add(ventanaExterior(-1.5, windowY, w2Z, 'X'));
  scene.add(ventanaInterior(-1.5, windowY, w2ZInt, 'X'));
}

// Alias solicitados
export function pisoImpar(yCenter, yCeiling) { crearPiso(1, yCenter, yCeiling); }
export function pisoPar(yCenter, yCeiling) { crearPiso(2, yCenter, yCeiling); }

// --- Construcción del Edificio ---

const floorCenters = [2.5, 8, 13, 18, 23, 27.5];
const ceilingCenters = [5.25, 10.5, 15.5, 20.5, 25.5, 30];

for (let i = 0; i < floorCenters.length; i++) {
  crearPiso(i + 1, floorCenters[i], ceilingCenters[i]);
}

// Nuevo techo extra encima del último piso (Piso 6) y debajo de los barandales del balcón
const balconTopMat = new THREE.MeshStandardMaterial({ color: 0xffccbb, roughness: 0.5 });
const techoExtra = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 7.2), balconTopMat);
techoExtra.position.set(0, 30.5, 0); // Posicionado para que los barandales del balcón sobresalgan un poco
scene.add(techoExtra);

// Balcón superior al final del edificio (Piso 6)

const balconTopParts = [
  { s: [7.2, 0.5, 0.5], p: [0, 31, -3.35] },
  { s: [7.2, 0.5, 0.5], p: [0, 31, 3.35] },
  { s: [0.5, 0.5, 7.2], p: [3.35, 31, 0] },
  { s: [0.5, 0.5, 7.2], p: [-3.35, 31, 0] }
];
balconTopParts.forEach(part => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...part.s), balconTopMat);
  mesh.position.set(...part.p);
  scene.add(mesh);
});

// --- Escena Decorativa y Luces ---

const centerY = 15;
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Luz ambiental para aclararlo todo
scene.add(ambientLight);

const directionalLights = [
  { p: [0, 25, -50], t: [0, 5, 0] }, // Norte
  { p: [0, 25, 50], t: [0, 5, 0] },  // Sur
  { p: [50, 25, 0], t: [0, 5, 0] },  // Este
  { p: [-50, 25, 0], t: [0, 5, 0] }  // Oeste
];
directionalLights.forEach(config => {
  const l = new THREE.DirectionalLight(0xffffff, 1.0); // Aumentada intensidad de 0.8 a 1.0
  l.position.set(...config.p);
  l.target.position.set(...config.t);
  l.castShadow = true;
  scene.add(l);
  scene.add(l.target);
});

// Luz puntual extra para el astronauta y el cohete en la azotea
const topLight = new THREE.PointLight(0xffffff, 1.5, 20);
topLight.position.set(0, 35, 0);
scene.add(topLight);

// Suelo
const ground = new THREE.Mesh(new THREE.PlaneGeometry(20, 20), new THREE.MeshStandardMaterial({ color: 0x33bb33 }));
ground.rotation.x = -Math.PI / 2;

ground.receiveShadow = true;
scene.add(ground);

// Camera inicial
const camRadius = -Math.sqrt(10**2 + 10**2); // Distancia original en el plano XZ
camera.position.set(10, 35, 10);
camera.lookAt(0, 35, 0);


// --- Lógica de Scroll ---
let scrollPercent = 0;
document.body.style.height = '5000px'; // Asegura que haya espacio para scroll

window.addEventListener('scroll', () => {
    scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
});

// OrbitControls comentados como solicitó el usuario
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.update();


// --- Modelos Externos ---

const clock = new THREE.Clock();
const gltfLoader = new GLTFLoader();
const fbxLoader = new FBXLoader();
const textureLoader = new THREE.TextureLoader();

// Astronauta
let astronautMixer;
gltfLoader.load('./assets/models/astronaut-waving/source/astronaut.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(1.2, 1.2, 1.2); // Escala más natural para GLTF en este entorno
    model.position.set(1.5, 30.8, 1.5); // En la azotea, cerca de la esquina
    model.rotation.y = 1.5;
    scene.add(model);

    model.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    if (gltf.animations && gltf.animations.length > 0) {
        astronautMixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
            astronautMixer.clipAction(clip).play();
        });
    }
}, undefined, (e) => console.error('Error astronaut:', e.message));

// Cohete
gltfLoader.load('./assets/rocket/rocket/scene.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(-1.4, 32.8, -1.4); // Un poco más alejado para que no se pise con el astronauta
    model.scale.set(4, 4, 4); // Agrandado de 0.5 a 0.8 como solicitó el usuario
    scene.add(model);
}, undefined, (e) => console.error('Error cohete:', e.message));

// AJ
let ajMixer;
fbxLoader.load('./assets/characters/aj-character.fbx', (fbx) => {
    const model = fbx;
    model.position.set(-1.5, 25.7, -1);
    model.rotation.y = 10;
    model.scale.set(0.015, 0.015, 0.015);
    scene.add(model);

    // Restaurar animación waving para AJ
    fbxLoader.load('./assets/animations/waving.fbx', (animFbx) => {
        ajMixer = new THREE.AnimationMixer(model);
        const action = ajMixer.clipAction(animFbx.animations[0]);
        action.play();
    });
}, undefined, (e) => console.error('Error aj:', e.message));

// Pizarra
gltfLoader.load('./assets/models/whiteboard.glb', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 27.3, 2);
    model.scale.set(2.5,2.5,2.5);
    model.rotation.y = 3.2;
    scene.add(model);
}, undefined, (e) => console.error('Error cohete:', e.message));

// Programador
let programmerMixer;
gltfLoader.load('./assets/models/programmer/scene.gltf', (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.3, 0.3, 0.3);
    model.position.set(2, 20.7, 0);
    model.rotation.y = Math.PI; // Rotar para que mire hacia el frente
    scene.add(model);

    model.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });

    if (gltf.animations && gltf.animations.length > 0) {
        programmerMixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
            programmerMixer.clipAction(clip).play();
        });
    }
}, undefined, (e) => console.error('Error programmer:', e.message));



// --- Bucle de Animación ---
function animate() {
  requestAnimationFrame(animate);
  const delta = clock.getDelta();

  // Actualizar rotación y altura de cámara según scroll
  const angle = scrollPercent * Math.PI * 2; // Una vuelta completa
  const currentHeight = 32 - (scrollPercent * 15); // Baja de 30 a 2

  camera.position.x = Math.cos(angle) * -camRadius;
  camera.position.y = currentHeight;
  camera.position.z = Math.sin(angle) * camRadius;

  camera.lookAt(-3, currentHeight, 0); // Mantiene vista horizontal siguiendo la altura



  if (astronautMixer) astronautMixer.update(delta);
  if (ajMixer) ajMixer.update(delta);
  if (programmerMixer) programmerMixer.update(delta);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
