//dont touch now

'use strict';

$(document).ready(function(){
   
    const width = 350;
    let current = 1;
    const animationSpeed = 2000;
    const pause = 5500;
    
    
    var $carousel = $("#animate");
    var $container = $("#carousel");
    var $slides = $(".carousel-item", $container);
    
    var interval;
    
    function startCarousel() {
        interval = setInterval(function(){
            $container.animate({'margin-left' : '-='+width},animationSpeed,function(){
                if(++current === $slides.length) {
                    current = 1;
                    $container.animate({'margin-left' : '0'}, 4000, function(){});
                    //$container.css('margin-left',0);
                }
            });
        },pause);
    }
    
    function pauseInterval() {
        clearInterval(interval);
    }
    
    $container.on('mouseenter', pauseInterval).on('mouseleave', startCarousel);
    
    startCarousel();
    
});