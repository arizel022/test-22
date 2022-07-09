$(function () {
      var mixer = mixitup('.work__gallery');

      $(window).on("scroll", function () {
        if ($(this).scrollTop() > 200) {
            $(".menu").addClass("active");
        }
        else {
            $(".menu").removeClass("active");
        }
    });
});





$("body").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;  
    $('body,html').animate({scrollTop: top}, 1500);
    
});


$('.hamburger').on('click', function(){
    $('.menu').toggleClass('menu--active');
    $('.menu__list').toggleClass('menu__list--active')
    
});

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: false,

    Image: {
        zoom: false,
        click: false,
        wheel: "slide",
    },

});

