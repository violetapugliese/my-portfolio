$(function () {
 const servicesSection = document.getElementById('Services')
    const aboutSection = document.getElementById('About')
    const worksSection = document.getElementById('Works')
    const bonusSection = document.getElementById('Bonus')

    const servicesSectionTop = servicesSection.offsetTop;
    const aboutSectionTop = aboutSection.offsetTop;
    const worksSectionTop = worksSection.offsetTop;
    console.log(worksSectionTop);
    const bonusSectionTop = bonusSection.offsetTop;

  var controller = new ScrollMagic.Controller();

  var blockTween = new TweenMax.to("#services-title", 1.5, {
    display: "block",
    transform: "rotate(160deg)",
    transitionDuration: "2s",
    transitionProperty: "transform",
  });
  var containerScene = new ScrollMagic.Scene({
    triggerElement: "#Services",
    duration: parseFloat(aboutSectionTop),
  })
    .setTween(blockTween)
    // .addIndicators()
  // var blockTween = new TweenMax.to("#services-title", 1.5, {
  //   display: "block",
  //   transform: "rotate(160deg)",
  //   transitionDuration: "2s",
  //   transitionProperty: "transform",
  // });
  // var containerScene = new ScrollMagic.Scene({
  //   triggerElement: "#Services",
  //   duration: parseFloat(aboutSectionTop),
  // })
  //   .setTween(blockTween)
  //   // .addIndicators()
  //   .addTo(controller);

  // Services IN-OUT
    new ScrollMagic.Scene({ triggerElement: "#MarqueeOne" , duration: parseFloat(aboutSectionTop),})
    .setClassToggle("#services-title", "wheel-title-show") 
    .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#About" ,  duration: parseFloat(aboutSectionTop),})
    .setClassToggle("#services-title", "wheel-title-out")
    .addTo(controller);

  // About IN-OUT
    new ScrollMagic.Scene({triggerElement: "#About" , duration: parseFloat(worksSectionTop),})
    .setClassToggle("#about-title", "wheel-title-show") 
    .addTo(controller);

    // new ScrollMagic.Scene({ triggerElement: "#Services" , duration: parseFloat(aboutSectionTop) })
    // .setClassToggle("#services-title", "wheel-title-show") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
    new ScrollMagic.Scene({ triggerElement: "#Works" ,  duration: parseFloat(worksSectionTop),})
    .setClassToggle("#about-title", "wheel-title-out")
    .addTo(controller);

  // Works IN-OUT

  new ScrollMagic.Scene({triggerElement: "#Works" , duration: parseFloat(bonusSectionTop),})
  .setClassToggle("#works-title", "wheel-title-show") 
  .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#Bonus" ,  duration: parseFloat(bonusSectionTop),})
  .setClassToggle("#works-title", "wheel-title-out")
  .addTo(controller);

});