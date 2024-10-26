// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      lenis.scrollTo(targetElement, {
        duration: 2, // Duration in seconds (increase this value to slow down)
        easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic easing function for a smooth effect
      });
    }
  });
});

const hero = document.querySelector(".hero");
const bg = document.querySelectorAll('div[class*="layer-"]');

const tl = gsap.timeline();

bg.forEach((el) => {
  const bgSpeed = el.getAttribute("data-speed");
  tl.to(
    el,
    {
      y: "-" + 20 * bgSpeed,
      duration: 2,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        // markers: true,
        scrub: true,
      },
    },
    0
  );
});

gsap.to(".d", {
  y: "-170px",
  scrollTrigger: {
    trigger: ".d",
    start: "top 100%",
    end: "top 0%",
    // markers: true,
    scrub: true,
  },
});

// const t2 = gsap.timeline();

// gsap.from(".head", {
//   y: "-100px",
//   duration: 0.4,
// });

// gsap.from(".header-icon", {
//   y: "80px",
//   opacity: 0,
//   delay: 0.4,
//   stagger: 0.2,
// });

gsap.to(".lottie_scroller", {
  y: "-100px",
  scrollTrigger: {
    trigger: ".lottie_scroller",
    // markers: true,
    start: "top 0",
    end: "top -50%",
    scrub: true,
  },
});

gsap.to(".head", {
  y: 80,
  scrollTrigger: {
    trigger: ".head",
    // markers: true,
    start: "top 0%",
    end: "top -30%",
    scrub: true,
  },
});

gsap.from(".hero-text", {
  y: 200,
  stagger: 0.1,
});

gsap.from(".a_head ", {
  y: 100,
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".a_head",
    // markers: true,
    scrub: true,
    start: "top 90%",
    end: "top 40%",
  },
});

gsap.to(".a_head_outer", {
  y: 50,
  scrollTrigger: {
    trigger: ".a_head_outer",
    scrub: true,
    // markers: true,
    start: "top 0",
    end: "top -30%",
  },
});

gsap.from(".b_head ", {
  y: 100,
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".b_head",
    // markers: true,
    scrub: true,
    start: "top 90%",
    end: "top 40%",
  },
});

gsap.from(".event_card", {
  x: 100,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".event_card",
    // markers: true,
    scrub: true,
    start: "top 80%",
    end: "top 30%",
  },
});
gsap.from(".event_card_a", {
  x: 100,
  stagger: 0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".event_card_a",
    // markers: true,
    scrub: true,
    start: "top 80%",
    end: "top 30%",
  },
});

gsap.from(".c_head ", {
  y: 100,
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".c_head",
    // markers: true,
    scrub: true,
    start: "top 90%",
    end: "top 40%",
  },
});

gsap.from(".member_sub_h", {
  y: "80px",
  stagger: 0.1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".member_sub_h",
    // markers: true,
    scrub: true,
    start: "top 90%",
    end: "top 60%",
  },
});

gsap.from(".member_card", {
  x: "-100px",
  stagger: -0.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".member_card",
    // markers: true,
    scrub: true,
    start: "top 80%",
    end: "top 30%",
  },
});
