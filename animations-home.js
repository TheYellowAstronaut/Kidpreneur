document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    lerp: 0.09,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  gsap.registerPlugin(ScrollTrigger);
  
  ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".second-section",
          start: "20% 100%",
          end: "50% 50%",
          scrub: true,
          // markers: true,
        },
      });

      tl1.to(
        "#bulb",
        {
          top: "200%",
          left: 0,
          rotate: "30deg",
        },
        "bulb"
      );
      gsap.timeline({
        scrollTrigger: {
          trigger: ".second-section",
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          // markers: true
        }
      })
      .fromTo("#question-mark", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to("#question-mark", { opacity: 0, duration: 1 });


      gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 180%",
          end: "top 130%",
          scrub: true,
          // markers: true
        }
      })
      .fromTo("#sparkle", { opacity: 0 }, { opacity: 1, duration: 1 })
      .to("#sparkle", { opacity: 0, duration: 1 });
    },
  });

  // Force a refresh after setup
  ScrollTrigger.refresh();
});