import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector(".ripples"),
  smooth: true,
  multiplier: 1,
  lerp: 0.03,
  smartphone: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});


document.querySelectorAll("section").forEach((section) => {
  section.setAttribute("data-scroll-section", "");
});

scroll.update();

window.addEventListener("load", () => {
  scroll.update();
});
const ripple = (element) => {
  $(element).ripples({
    dropRadius: 20,
    perturbance: 0.04,
    resolution: 256,
    interactive: true,
    ripplesRadius: 50,
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const sectionsWithRipples = document.querySelectorAll(".ripples");

  sectionsWithRipples.forEach((section) => {
    ripple(section);
  });
});

let mainArrow = document.querySelector(".mainArrow");
let arrow = document.querySelector(".arrow");

mainArrow.addEventListener("mousemove", function (details) {
  const rect = mainArrow.getBoundingClientRect();

  gsap.to(arrow, {
    x: details.clientX - rect.left - rect.width / 2,
    y: details.clientY - rect.top - rect.height / 2,
    duration: 0.8,
    ease: "power1.out",
  });
});

mainArrow.addEventListener("mouseleave", function () {
  gsap.to(arrow, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

var intialPath = "M 10 100 Q 500 100 1200 100";

var finalPath = "M 10 100 Q 500 100 1200 100";

var string = document.querySelector("#string");
string.addEventListener("mousemove", function (dets) {
  var path = `M 10 100 Q 500 ${dets.clientY} 1200 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "ease.in",
  });
});
string.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: intialPath },
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});

const profileImage = document.querySelector(".profileimage");
const cursor = document.createElement("div");
cursor.classList.add("cursor");

const style = document.createElement("style");
style.textContent = `
  .cursor {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.5);
    backdrop-filter: grayscale(100%);
    position: fixed;
    pointer-events: none;
    mix-blend-mode: saturation;
    z-index: 1;
    display: none;
  }
`;
document.head.appendChild(style);
document.body.appendChild(cursor);

profileImage.addEventListener("mousemove", (e) => {
  const rect = profileImage.getBoundingClientRect();

  if (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
  ) {
    cursor.style.display = "block";
    cursor.style.left = e.clientX - 75 + "px";
    cursor.style.top = e.clientY - 75 + "px";
  }
});

profileImage.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

let S2mainArrow = document.querySelector(".S2mainArrow");
let S2arrow = document.querySelector(".S2arrow");

S2mainArrow.addEventListener("mousemove", function (details) {
  const rect = S2mainArrow.getBoundingClientRect();

  S2arrow.innerHTML = '<i class="ri-arrow-right-down-line text-4xl"></i>';

  gsap.to(S2arrow, {
    x: details.clientX - rect.left - rect.width / 2,
    y: details.clientY - rect.top - rect.height / 2,
    duration: 0.8,
    ease: "power1.out",
  });
});

S2mainArrow.addEventListener("mouseleave", function () {
  S2arrow.innerHTML = `Learn <br><span class="ml-2"> more</span>`;
  gsap.to(S2arrow, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

let overlay = document.querySelector(".overlay h1");
let overlayText = overlay.textContent;
let repeatedText = overlayText.repeat(10);

overlay.textContent = repeatedText;

gsap.to(overlay, {
  x: "-50%",
  duration: 50,
  repeat: -1,
  ease: "linear",
});
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".projectCard");
  const s3overlay = document.querySelector(".s3overlay");
  const overlayTitle = s3overlay.querySelector(".overlaytitle");

  projectCards.forEach((card) => {
    const caption = card.querySelector(".cardcaption");

    card.addEventListener("mouseenter", () => {
      projectCards.forEach((otherCard) => {
        gsap.to(otherCard, {
          opacity: 0.3,
          duration: 0.3,
        });
      });

      gsap.to(card, {
        opacity: 1,
        duration: 0.3,
      });

      const projectTitle = card.getAttribute("data-title");
      overlayTitle.textContent = projectTitle;
      gsap.from(overlayTitle, { y: 100, duration: 0.1, stagger: 0.13 });
      gsap.to(caption, { y: 0, opacity: 1, duration: 0.3 });
      gsap.to(s3overlay, {
        opacity: 1,
        duration: 0.3,
      });
      hoverEffect(card);
    });

    card.addEventListener("mouseleave", () => {
      projectCards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          duration: 0.3,
        });
      });

      gsap.to(caption, { opacity: 0, duration: 0.3 });
      gsap.to(s3overlay, { opacity: 0, duration: 0.3 });
      overlayTitle.textContent = "";
    });
  });
});

const hoverEffect = (divname) => {
  const profileImage = divname;

  const style = document.createElement("style");
  style.textContent = `
  .cursor {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(128, 128, 128, 0.5);
    backdrop-filter: grayscale(100%);
    position: fixed;
    pointer-events: none;
    mix-blend-mode: saturation;
    z-index: 1;
    display: none;
  }
`;
  document.head.appendChild(style);
  document.body.appendChild(cursor);

  profileImage.addEventListener("mousemove", (e) => {
    const rect = profileImage.getBoundingClientRect();

    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      cursor.style.display = "block";
      cursor.style.left = e.clientX - 75 + "px";
      cursor.style.top = e.clientY - 75 + "px";
    }
  });

  profileImage.addEventListener("mouseleave", () => {
    cursor.style.display = "none";
  });
};

let S3mainArrow = document.querySelector(".S3mainArrow");
let S3arrow = document.querySelector(".S3arrow");

S3mainArrow.addEventListener("mousemove", function (details) {
  const rect = S3mainArrow.getBoundingClientRect();

  S3arrow.innerHTML = '<i class="ri-arrow-right-down-line text-4xl"></i>';

  gsap.to(S3arrow, {
    x: details.clientX - rect.left - rect.width / 2,
    y: details.clientY - rect.top - rect.height / 2,
    duration: 0.8,
    ease: "power1.out",
  });
});

S3mainArrow.addEventListener("mouseleave", function () {
  S3arrow.innerHTML = `Learn <br><span class="ml-2"> more</span>`;
  gsap.to(S3arrow, {
    x: 0,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  });
});

var intialPath = "M 10 100 Q 500 100 1200 100";

var finalPath = "M 10 100 Q 500 100 1200 100";

var strings = document.querySelector(".s3 #string");
strings.addEventListener("mousemove", function (dets) {
  var path = `M 10 100 Q 500 ${dets.clientY} 1200 100`;
  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.2,
    ease: "ease.in",
  });
});
strings.addEventListener("mouseleave", function (dets) {
  gsap.to("svg path", {
    attr: { d: intialPath },
    duration: 0.6,
    ease: "back.out(1.7)",
  });
});

const s4container = document.querySelector(".s4container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  s4container.offsetWidth / s4container.offsetHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(s4container.offsetWidth, s4container.offsetHeight);
s4container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("/assests/Animate12.png");

const geometry = new THREE.CylinderGeometry(2, 2, 2, 32, 1, true);
const material = new THREE.MeshStandardMaterial({
  transparent: true,
  side: THREE.DoubleSide,
  map: texture,
});
const sphere = new THREE.Mesh(geometry, material);
sphere.rotation.set(0, 0.1, 0.2);
scene.add(sphere);

const ambientLight = new THREE.AmbientLight(0xffffff, .3);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, .4);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

controls.enableZoom = false;

camera.position.z = 5;

function rotateCylinder() {
  sphere.rotation.y += 0.01;
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  rotateCylinder();
  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = s4container.offsetWidth / s4container.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(s4container.offsetWidth, s4container.offsetHeight);
});

animate();

const s5=document.querySelector(".s5");
s5.addEventListener("mouseenter", () => {
  animateBox();
});




function animateBox(){
var tl=gsap.timeline();
tl.fromTo(".s5ContentBox",{
  height: "200%",
  width:"200%",
 
  ease: "slow(0.1, 0.1, true)",
  opacity: 0,

},
{
  height: "80%", 
  width:"80%",
  border: "1px solid white",

  ease: "slow(0.1, 0.1, true)",
  opacity: 1,
  
})
tl.to(".s5Bottom",{
  opacity: 1,
  duration: 0.3,
})
}
