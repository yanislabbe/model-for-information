var scene, camera, renderer, carteAffaires, carteArriere180;
var mousePressed = false;

function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("carte-affaires").appendChild(renderer.domElement);

  var texture = new THREE.TextureLoader().load("img/tacarte.png");
  var geometry = new THREE.PlaneGeometry(2, 2);
  var material = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
  carteAffaires = new THREE.Mesh(geometry, material);

  scene.add(carteAffaires);

  var textureArriere180 = new THREE.TextureLoader().load("img/tacarte.png");
  var materialArriere180 = new THREE.MeshBasicMaterial({ map: textureArriere180 });
  var geometryArriere180 = new THREE.PlaneGeometry(2, 2);
  carteArriere180 = new THREE.Mesh(geometryArriere180, materialArriere180);
  carteArriere180.position.z = -0.01;
  carteArriere180.rotation.y = Math.PI;
  scene.add(carteArriere180);

  camera.position.z = 5;

  carteAffaires.addEventListener('mousedown', function() {
    mousePressed = true;
  });

  carteAffaires.addEventListener('mouseup', function() {
    mousePressed = false;
  });
}

function animate() {
  requestAnimationFrame(animate);

  if (mousePressed) {
    // Rotation de l'objet jusqu'à 180 degrés
    carteAffaires.rotation.y += 0.1;
    if (carteAffaires.rotation.y >= Math.PI) {
      carteAffaires.visible = false;
      carteArriere180.visible = true;
    }
  }

  renderer.render(scene, camera);
}

function handleResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function handleMouseMove(event) {
    if (mousePressed) {
      var mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  
      // Limiter la rotation à 180 degrés de gauche à droite
      var maxRotationY = Math.PI; // Limite maximale de rotation vers la droite
      var minRotationY = -Math.PI; // Limite maximale de rotation vers la gauche
  
      carteAffaires.rotation.y = Math.max(minRotationY, Math.min(maxRotationY, mouseX * Math.PI));
      
      if (carteAffaires.rotation.y >= -Math.PI/2 && carteAffaires.rotation.y <= Math.PI/2) {
        carteAffaires.visible = true;
        carteArriere180.visible = false;
      } else {
        carteAffaires.visible = false;
        carteArriere180.visible = true;
      }
    }
  }
  

window.addEventListener("resize", handleResize);

init();
animate();
