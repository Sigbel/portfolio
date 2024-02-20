// ThreeJS
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const earthAnimation = () => {
  // Set canvas
  const canvas = document.querySelector(".webgl");

  // Init the scene that contains all the 3D object data
  const scene = new THREE.Scene();

  // Loads the GLB file
  const modelLoader = new GLTFLoader();

  modelLoader.load(
    "src/assets/earth4k.glb",
    (gltf) => {
      const model = gltf.scene;

      // Ajuste da posição inicial do modelo
      model.position.set(0, 0, 0);

      // Adicione o modelo à cena
      scene.add(model);

      console.log("Modelo GLTF carregado com sucesso:", model);
    },
    undefined,
    (error) => {
      console.error("Erro ao carregar modelo GLTF:", error);
    }
  );

  // Adds light to the object
  const light = new THREE.DirectionalLight(0xffffffff, 1);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  // Defines the camera position
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
  );

  // Ajuste da posição da câmera
  camera.position.set(5, 5, 200);
  camera.lookAt(new THREE.Vector3(0, 0, 0));

  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.gammaOutput = true;
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.minPolarAngle = controls.maxPolarAngle = Math.PI * 0.3;

  // Function to animate the scene
  const animate = () => {
    requestAnimationFrame(animate);

    controls.update();

    light.position.copy(camera.position);

    renderer.render(scene, camera);
  };

  animate();
};

export default earthAnimation;
