document.addEventListener("DOMContentLoaded", () => {
  
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  gsap.fromTo("input",
    { x: "-50%", y: -80, width: 0.001, opacity: 1 },
    { x: "-50%", y: 80, width: 300, opacity: 1, duration: 0.5, ease: CustomEase.create("custom", "M0,0 C0,0 0.038,1.424 1,1 "),}
  );
});
