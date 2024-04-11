//Replace me Code preferences
let replace = new ReplaceMe(document.querySelector('.replace-me'), {
    animation: 'animated fadeIn',                       // Animation class or classes
    speed: 2500,                                        // Delay between each phrase in milliseconds
    separator: ',',                                     // Phrases separator
    hoverStop: false,                                   // Stop rotator on phrase hover
    clickChange: false,                                 // Change phrase on click
    loopCount: 'infinite',                              // Loop Count - 'infinite' or number
    autoRun: true,                                      // Run rotator automatically
    onInit: false,                                      // Function
    onChange: false,                                    // Function
    onComplete: false                                   // Function
});

//smooth Scrolling
$('#main-nav a').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

//Home buttons smooth Scrolling
$('#home .btn').on('click', function(event){
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash = hash;
        });
    }
});

//AOS Init
AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: 'aos-init', // class applied after initialization
//   animatedClassName: 'aos-animate', // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
