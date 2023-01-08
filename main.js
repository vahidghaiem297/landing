AOS.init({
        disable: function() {
            var maxWidth = 992;
            return window.innerWidth < maxWidth;
          },
        duration:1500,
        ease:"ease-in-out",
      once:true,
    });

    
    gsap.timeline()

    .from(".discount-1",{y:-100, duration:1, rotation:1000, ease:"power-4"})