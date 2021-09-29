import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;

const geometry = new THREE.TorusGeometry(10, 3, 16, 16);
const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xea3d25 });
const object = new THREE.Mesh(geometry, material);

let renderer;
let controls;

scene.add(object);

function animate() {
    requestAnimationFrame(animate);

    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
    object.rotation.z += 0.01;

    // controls.update();

    renderer.render(scene, camera);
}

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}

export function createScene(scene) {
    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: scene });
    controls = new OrbitControls(camera, renderer.domElement);
    resize();
    animate();
}

window.addEventListener('resize', resize);
