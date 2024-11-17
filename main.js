
const ripple = () => {
  $('body').ripples({
    dropRadius: 20, 
    perturbance: 0.04,
    resolution: 256,
    interactive: true, 
    ripplesRadius: 50
});
}


document.addEventListener("DOMContentLoaded", () => {
  ripple();
});
