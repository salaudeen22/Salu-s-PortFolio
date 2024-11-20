const ripple = (element) => {
  $(element).ripples({
    dropRadius: 20,
    perturbance: 0.04,
    resolution: 256,
    interactive: true,
    ripplesRadius: 50,
  });
};

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     multiplier: 1,
//     lerp: 0.03,
//     smartphone: {
//         smooth: true
//     },
//     tablet: {
//         smooth: true
//     }
// });

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
  
      // Mouse enter: Show the caption and overlay
      card.addEventListener("mouseenter", () => {
        // Dim all cards first
        projectCards.forEach(otherCard => {
          gsap.to(otherCard, {
            opacity: 0.3,
            duration: 0.3
          });
        });

        // Brighten hovered card
        gsap.to(card, {
          opacity: 1,
          duration: 0.3
        });
       
        const projectTitle = card.getAttribute("data-title");
        overlayTitle.textContent = projectTitle;
        gsap.from(overlayTitle, { y: 100, duration: 0.1, stagger: 0.13});
        gsap.to(caption, { y:0, opacity: 1, duration: 0.3 });
        gsap.to(s3overlay, {
          opacity: 1, duration: 0.3
        });
        hoverEffect(card);
      });
  
      // Mouse leave: Hide the caption and reset overlay
      card.addEventListener("mouseleave", () => {
        // Reset opacity of all cards
        projectCards.forEach(card => {
          gsap.to(card, {
            opacity: 1,
            duration: 0.3
          });
        });

        gsap.to(caption, { opacity: 0, duration: 0.3 });
        gsap.to(s3overlay, { opacity: 0, duration: 0.3 });
        overlayTitle.textContent = "";
      });
    });
});




const hoverEffect=(divname)=>
{
const profileImage = divname

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
}
