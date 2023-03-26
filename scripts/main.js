$(document).ready(function(){
    $('#menu a').click(menuItemClick);
    $('#categories a').click(categoriesItemClick);

    function menuItemClick(){
      $('#menu a').removeClass('active');
      $(this).addClass('active');
  }
  
  function categoriesItemClick(){
    $('#categories a').removeClass('active');
    $(this).addClass('active');
  }

  new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
  new Swiper(".singleSwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  new Swiper(".phoneSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
