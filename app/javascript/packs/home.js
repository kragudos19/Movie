$(function(){
    // Init Carousel
    $('.owl-carousel').owlCarousel({
        center: true,
        items: 5,
        loop: true
    });

    appMovieNavigation.init('.owl-item.active .jsNavigate a');

})


var appMovieNavigation = (function(){
    // Private Functions
    function init(firstFocusEle) {
        document.querySelectorAll(firstFocusEle)[0].focus();
        var accessiblecontainers = document.getElementsByClassName("jsNavigate");
    
        for (var i = 0; i < accessiblecontainers.length; i++)
        accessiblecontainers[i].addEventListener("keydown", function (event) {
            if (event.keyCode == 37) {
                appMovieNavigation.previousMovie(event.target);
            }
            else if (event.keyCode == 39) 
            {
                appMovieNavigation.nextMovie(event.target);
            }
            else if (event.keyCode == 40) 
            {
                appMovieNavigation.nextCategory(event.target);
    
            }
            else if (event.keyCode == 38) 
            {
                appMovieNavigation.previousCategory(event.target)
            }
        }, false);
    }

    function selectNextMovie(targetElement){
        var tEle = targetElement;
        $(tEle).closest('.owl-item').next().find('a').focus();
    }
    
    function selectPreviousMovie(targetElement) {
        var tEle = targetElement;
        var horizPos;
    
        $(tEle).closest('.owl-item').prev().find('a').focus();
        horizPos = $(tEle).offset().left;
        $(tEle).closest('.owl-stage')[0].style.transform = 'translate3d(' + horizPos.toString() + ', 0px , 0px)';
    }
    
    function selectNextCat(targetElement) {
        var tEle = targetElement;
        var vert;
        vert = $(targetElement).closest('.owl-carousel').data('nav');
        $('[data-nav="' + (vert + 1) + '"]').find('.active').eq(0).find('a').focus();
    }
    
    function selectPreviousCat(targetElement) {
        var tEle = targetElement;
        var vert;
        vert = $(targetElement).closest('.owl-carousel').data('nav');
        $('[data-nav="' + (vert - 1) + '"]').find('.active').eq(0).find('a').focus();
    }

    // Public Functions
    return {
        init: function(firstFocusElement){init(firstFocusElement)},
        nextMovie: function(targetElement){selectNextMovie(targetElement)},
        previousMovie: function(targetElement){selectPreviousMovie(targetElement)},
        nextCategory: function(targetElement){selectNextCat(targetElement)},
        previousCategory: function(targetElement){selectPreviousCat(targetElement)}
    }
})();