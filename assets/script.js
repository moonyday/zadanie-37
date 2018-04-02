	$(document).ready(function(){
  
  $('.carousel').slick({
    slidesToShow: 3,
    centerMode: true,
  	centerPadding: '60px',
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    cssEase: 'ease-in-out',
    useTransform: true,
    infinite: true,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
});




window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var bg = header.offsetTop;

  function myFunction(){
    if (window.pageYOffset > bg) {
      header.classList.add("bg-change");
    } else {
      header.classList.remove("bg-change");
    }
  };


(function(){
  $('.search').on('click', function(){
    $('body').addClass('search-open')
  })
})();

(function(){
  $('.close').on('click', function(){
    $('body').removeClass('search-open')
  })
})();


  (function () {
    $('nav a').not(document.getElementById('home'))
      .on('click', function (e) {
        e.preventDefault();
        var linkClass = $(this).attr('class');
          $('html, body').animate({
          scrollTop: $('.' + linkClass + '-section').offset().top + 'px'
      }, 300);
      })
  })();

  (function () {
    $('.open-nav').on('click', function() {
      $('body').addClass('mobile-nav-open')
    })
  })();

  (function () {
    $('.close-nav').on('click', function() {
      $('body').removeClass('mobile-nav-open')
    })
  })();