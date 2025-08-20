(function($) {
    'use strict';

  var element = document.getElementsByClassName("menuImg")[0];
  var newClassName = "imgMenu";
  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition >= 60) {
      element.classList.add(newClassName);
      element.classList.remove("menuImg");
    } else {
      element.classList.add("menuImg");
      element.classList.remove(newClassName);
    }
  })


    //Tab to top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
        $('.scroll-top-wrapper').addClass("show");
        }
    else{
        $('.scroll-top-wrapper').removeClass("show");
        }
    });
    $(".scroll-top-wrapper").on("click", function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });



  $('#mixedSlider').multislider({
      duration: 750,
      interval: 3000
    });


  const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });





  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to the clicked button
      button.classList.add('active');

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));
      // Show the corresponding panel
      const tabId = button.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
  
  
  /* ==================================================
        # Homepage PopUp
     ===============================================*/
    //$('.setopressModal').modal('show');
    //setTimeout(function() {
        //$('.setopressModal').modal('hide');
    //}, 5500);


    /* ==================================================
        # Homepage Popup Close Click Init
     ===============================================*/

   // $('.close').on('click', function(){
       // $(this).closest('.setopressModal').removeClass('show').hide();
        //$('.modal-backdrop').remove();
         //$('body').removeClass('modal-open');
   // });


})(jQuery);
