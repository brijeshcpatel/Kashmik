var swiper = new Swiper(".banner-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      769: {
        autoplay: false,
      }
    }

  });

  var swiper = new Swiper(".futures", {
    slidesPerView: 1.68,
    centeredSlides: false,
    loop: false,
    initialSlide: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        var bulletNames = ["vision", "mission", "values", "expertise"];
        return (
          '<span class="' + className + '">' + bulletNames[index] + "</span>"
        );
      },
    },
    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 60,
      },
    },
  });
  
  

  var swiper = new Swiper(".testimonial-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".faq-btn").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().slideUp(400);
      $(this).parent().removeClass("open");
    } else {
      $(".faq-btn").removeClass("active");
      $(".faq-btn").next().slideUp(400);
      $(".faq-btn").parent().removeClass("open");

      $(this).addClass("active");
      $(this).next().slideDown(400);
      $(this).parent().addClass("open");
    }
  });

  $(".faq-btn").first().addClass("active");
  $(".faq-btn").first().next().slideDown(0);
  $(".faq-btn").first().parent().addClass("open");

document.addEventListener("DOMContentLoaded", function () {
  let player = document.getElementById("bplayer");
  let playButton = document.getElementById("play-icon");
  let videodetails = document.getElementById("video-heading");

  if (player && playButton && videodetails) {
      function togglePlay() {
          if (player.paused) {
              player.play();
              videodetails.classList.add("hidden");
          } else {
              player.pause();
              videodetails.classList.remove("hidden");
          }
      }

      playButton.addEventListener("click", togglePlay);
      player.addEventListener("click", togglePlay);

      player.addEventListener("pause", function () {
          videodetails.classList.remove("hidden");
      });

      player.addEventListener("ended", function () {
          videodetails.classList.remove("hidden");
      });
  }
});