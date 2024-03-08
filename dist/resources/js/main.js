//Replaceme Code preferences
let replace = new ReplaceMe(document.querySelector('.replace-me'), {
    animation: 'animated fadeIn',                       // Animation class or classes
    speed: 2500,                                        // Delay between each phrase in miliseconds
    separator: ',',                                     // Phrases separator
    hoverStop: false,                                   // Stop rotator on phrase hover
    clickChange: false,                                 // Change phrase on click
    loopCount: 'infinite',                              // Loop Count - 'infinite' or number
    autoRun: true,                                      // Run rotator automatically
    onInit: false,                                      // Function
    onChange: false,                                    // Function
    onComplete: false                                   // Function
});