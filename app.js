const button = document.querySelector("button");
const nav = document.querySelector("nav");

button.addEventListener("click", () => {
    nav.classList.toggle("nav-slide")
})



gsap.to(".wc", {
    x:1270,
    repeat: -1,
    duration: 10,
    ease: "linear",

})