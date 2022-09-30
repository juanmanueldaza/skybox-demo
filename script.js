let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(
    55,
    window.innerWidth / window.innerHeight,
    45,
    30000
  );
  camera.position.set(-900, -200, -900);
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  let controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderer);
  controls.minDistance = 500;
  controls.maxDistance = 1500;
  let materialArray = [];
  let negX = new THREE.TextureLoader().load("./UnionSquare/negx.jpg");
  let posX = new THREE.TextureLoader().load("./UnionSquare/posx.jpg");
  let negY = new THREE.TextureLoader().load("./UnionSquare/negy.jpg");
  let posY = new THREE.TextureLoader().load("./UnionSquare/posy.jpg");
  let negZ = new THREE.TextureLoader().load("./UnionSquare/negz.jpg");
  let posZ = new THREE.TextureLoader().load("./UnionSquare/posz.jpg");

  materialArray.push(new THREE.MeshBasicMaterial({ map: negX }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: posX }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: posY }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: negY }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: negZ }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: posZ }));

  for (let i = 0; i < 6; i++) materialArray[i].side = THREE.BackSide;

  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
  let skybox = new THREE.Mesh(skyboxGeo, materialArray);
  scene.add(skybox);
  animate();
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
