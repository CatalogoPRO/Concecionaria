document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-btn');
  const products = document.querySelectorAll('.product');

  // Mostrar todos los productos por defecto al cargar la página
  products.forEach(product => {
    product.style.display = 'block';
  });

  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover la clase 'active' de todos los botones
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar la clase 'active' al botón seleccionado
      this.classList.add('active');
      
      // Mostrar u ocultar productos según la categoría seleccionada
      const category = this.dataset.category;
      products.forEach(product => {
        if (category === 'all' || product.classList.contains(category)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });

      // Scroll hacia #referencia
      const referenciaElement = document.getElementById('referencia');
      referenciaElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});













var producto1Swiper = new Swiper("#producto1 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto1 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto1 .swiper-button-next",
    prevEl: "#producto1 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});


var producto1Swiper = new Swiper("#producto2 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto2 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto2 .swiper-button-next",
    prevEl: "#producto2 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});


var producto1Swiper = new Swiper("#producto3 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto3 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto3 .swiper-button-next",
    prevEl: "#producto3 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});



var producto1Swiper = new Swiper("#producto4 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto4 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto4 .swiper-button-next",
    prevEl: "#producto4 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});


var producto1Swiper = new Swiper("#producto5 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto5 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto5 .swiper-button-next",
    prevEl: "#producto5 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});

var producto1Swiper = new Swiper("#producto6 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto6 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto6 .swiper-button-next",
    prevEl: "#producto6 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});

var producto1Swiper = new Swiper("#producto7 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto7 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto7 .swiper-button-next",
    prevEl: "#producto7 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});

var producto1Swiper = new Swiper("#producto8 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto8 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto8 .swiper-button-next",
    prevEl: "#producto8 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});

var producto1Swiper = new Swiper("#producto9 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto9 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto9 .swiper-button-next",
    prevEl: "#producto9 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});

var producto1Swiper = new Swiper("#producto10 .mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});

var producto1Swiper2 = new Swiper("#producto10 .mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: "#producto10 .swiper-button-next",
    prevEl: "#producto10 .swiper-button-prev",
  },
  thumbs: {
    swiper: producto1Swiper,
  },
});










$(document).ready(function(){
  $('.testimony').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});





